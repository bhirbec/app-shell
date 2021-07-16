import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/app";

import "firebase/auth";
import 'firebaseui/dist/firebaseui.css';

import App from './app';
import reportWebVitals from './reportWebVitals';

// Initialize Firebase
import config from './config';
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((user) => {
  // Render the app
  ReactDOM.render(
    <React.StrictMode>
      {user ?
        <App />
        :
        <div id="firebaseui-auth-container"></div>
      }
    </React.StrictMode>,
    document.getElementById('root')
  );

  if (user === null) {
    var firebaseui = require('firebaseui');
    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInFlow: 'popup',
      signInSuccessUrl: 'http://localhost:3000/',
    });
  }

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
});