import { useEffect } from 'react';
import firebase from "firebase/app";

import 'firebaseui/dist/firebaseui.css';

export function Signin() {
  useEffect(() => {
    var firebaseui = require('firebaseui');
    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebaseui-auth', {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInFlow: 'popup',
      signInSuccessUrl: '/',
    });
  });

  return <div id="firebaseui-auth"></div>;
}

export function Signout() {
  const onClick = (e) => {
    firebase.auth().signOut();
    e.preventDefault();
  }

  return <a href="#" onClick={onClick}>Signout</a>
}
