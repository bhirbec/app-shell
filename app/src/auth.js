import { useEffect } from 'react';
import { Redirect, Route, useLocation } from "react-router-dom";
import firebase from "firebase/app";

import 'firebaseui/dist/firebaseui.css';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export function AuthenticatedRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        const user = firebase.auth().currentUser;
        const loc = location.pathname + location.search;

        if (user === null) {
          return <Redirect
            to={{
              pathname: "/signin",
              state: { from: loc }
            }}
          />;
        } else {
          return children;
        }
      }}
    />
  );
}

export function Signin() {
  let loc = useLocation();
  const stateUrl = (loc.state || {})['from'] || '/';
  const successUrl = stateUrl === '/' ? '/home' : stateUrl;
  const user = firebase.auth().currentUser;

  useEffect(() => {
    if (user !== null) { return }

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

  if (user === null) {
    return <div id="firebaseui-auth"></div>;
  } else {
    return <Redirect to={successUrl} />;
  }
}

export function Signout() {
  const onClick = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  return <a href="#" onClick={onClick}>Signout</a>
}
