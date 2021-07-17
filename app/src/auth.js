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

        if (user === null) {
          return <Redirect
            to={{
              pathname: "/signin",
              state: { from: location.pathname + location.search }
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
