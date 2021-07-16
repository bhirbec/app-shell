import { useEffect } from 'react';
import firebase from "firebase/app";

import 'firebaseui/dist/firebaseui.css';

function Signin() {
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

export default Signin
