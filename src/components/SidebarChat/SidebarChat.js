import React, {useEffect, useState} from 'react';
import './SidebarChat.css'
import {Avatar} from "@material-ui/core";

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState('')

  useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = () => {
    const roomName = prompt('Please enter name for chat')
    if (roomName) {
      // do some database stuff
    }
  }

  return !addNewChat ? (
    <div className='sidebar__chat'>
      <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
      <div className="sidebar__chat-info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div
      className='sidebar__chat'
      onClick={createChat}
    >
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
