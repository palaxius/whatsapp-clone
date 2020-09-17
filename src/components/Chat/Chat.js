import React, {useEffect, useState} from 'react';
import './Chat.css'

import {Avatar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

import db from "../../firebase";
import firebase from "firebase";
import {useParams} from "react-router-dom";
import {useStateValue} from "../../StateProvider";

const Chat = () => {

  const [seed, setSeed] = useState('')
  const [input, setInput] = useState('')
  const [roomName, setRoomName] = useState('')
  const {roomId} = useParams()
  const [messages, setMessages] = useState([])
  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomName(snapshot.data().name)
      ))

      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => (
          setMessages(snapshot.docs.map(doc => doc.data()))
        ))
    }
  }, [roomId])

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [roomId])

  const sendMessage = (event) => {
    event.preventDefault()

    db.collection('rooms').doc(roomId).collection('messages').add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
}
  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
        <div className="chat__header-info">
          <h3>{roomName}</h3>
          {messages && messages[messages.length - 1] &&
          <p>Last seen:{' '}
            {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}
          </p>
          }

        </div>
        <div className="chat__header-icons">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">

        {messages.map(message => (
          <p
            className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}
          >
          <span className="chat__name">
            {message.name}
          </span>
            {message.message}
            <span className="chat__timestamp">
              {
                new Date(message.timestamp?.toDate())
                  // .toLocaleString()
                  .toLocaleTimeString()
                  // .toUTCString()
              }
          </span>
          </p>
        ))}


      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={event => setInput(event.target.value)}
            type="text"
            placeholder='Type a message'
          />
          <button
            onClick={sendMessage}
            type='submit'
          >
            Send a message
          </button>
        </form>
        <MicIcon/>
      </div>
    </div>
  );
};

export default Chat;
