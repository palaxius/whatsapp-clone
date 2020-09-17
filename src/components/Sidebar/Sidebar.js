import React, {useEffect, useState} from 'react';
import './Sidebar.css'
import {Avatar} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from "@material-ui/core/IconButton";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "../SidebarChat/SidebarChat";
import db from "../../firebase";
import {useStateValue} from "../../StateProvider";

const Sidebar = () => {

  const [rooms, setRooms] = useState([])
  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
      setRooms(snapshot.docs.map(doc =>
        ({
          id: doc.id,
          data: doc.data()
        })
      ))
    ))

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <Avatar src={user.photoURL && user.photoURL} />
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
          <SidebarChat addNewChat/>
        {
          rooms.map(room => (
            <SidebarChat
              key={room.id}
              id={room.id}
              name={room.data.name}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Sidebar;
