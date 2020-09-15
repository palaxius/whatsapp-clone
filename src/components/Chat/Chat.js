import React, {useEffect, useState} from 'react';
import './Chat.css'
import {Avatar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

const Chat = () => {

  const [seed, setSeed] = useState('')
  const [input, setInput] = useState('')

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()
    console.log(input)
    setInput('')
}

  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
        <div className="chat__header-info">
          <h3>Room Name</h3>
          <p>Last seen at ...</p>
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

        <p
          className={`chat__message ${true && 'chat__receiver'}`}
        >
          <span className="chat__name">
          Andrey Avtushenko
          </span>
          Heeyy Guyyss!!!
          <span className="chat__timestamp">
            3:52pm
          </span>
        </p>

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
