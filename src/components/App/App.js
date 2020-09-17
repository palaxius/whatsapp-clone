import React from 'react';
import './App.css';
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import Login from "../Login/Login";
import {useStateValue} from "../../StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      {
        !user
          ? <Login />
          : (
            <div className="app__body">
              <Router>
                <Sidebar />
                <Switch>
                  <Route path="/rooms/:roomId">
                    <Chat />
                  </Route>
                </Switch>
              </Router>
            </div>
          )
      }


    </div>
  );
}

export default App;
