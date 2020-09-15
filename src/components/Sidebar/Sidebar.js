import React from 'react';
import './Sidebar.css'
import {Avatar} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from "@material-ui/core/IconButton";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "../SidebarChat/SidebarChat";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__header-icons">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__search-container">
          <SearchOutlinedIcon/>
          <input placeholder='Search or start new chat' type="text"/>
        </div>
      </div>
      <div className="sidebar__dialogs">
        <SidebarChat addNewChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
