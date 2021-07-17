import { useEffect } from 'react';
import { Redirect, useLocation } from "react-router-dom";
import firebase from "firebase/app";

import 'firebaseui/dist/firebaseui.css';

export function RedirectToSignin() {
  let location = useLocation();

  return <Redirect to={{
    pathname: '/signin',
    state: {from: location.pathname + location.search }
  }} />
}

export function Signin() {
  let loc = useLocation();
  let successUrl = (loc.state || {})['from'] || '/';

  useEffect(() => {
    let firebaseui = require('firebaseui');
    let ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebaseui-auth', {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInFlow: 'popup',
      signInSuccessUrl: successUrl,
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
