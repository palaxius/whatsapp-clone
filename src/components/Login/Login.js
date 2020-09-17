import React from 'react';
import './Login.css'
import {Button} from "@material-ui/core";
import {auth, provider} from "../../firebase";
import {useStateValue} from "../../StateProvider";
import {actionTypes} from "../../reducer";

const Login = () => {
  const [{user}, dispath] = useStateValue()

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispath({
          type: actionTypes.SET_USER,
          payload: result.user
        })
      })
      .catch(err => console.error(err.message))
  }

  return (
    <div className='login'>
      <div className="login__container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/120px-WhatsApp.svg.png" alt="logo"/>
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
