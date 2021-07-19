import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/app";
import "firebase/auth";

import App from './app';
import reportWebVitals from './reportWebVitals';

// Initialize Firebase
firebase.initializeApp(window.firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  // Render the app
  ReactDOM.render(
    <React.StrictMode>
      <App user={user} />
    </React.StrictMode>,
    document.getElementById('root')
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
});
