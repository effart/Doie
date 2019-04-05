import firebase  from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDHsbWyFmtIjoIeLpjInkUrvQhv4yYQ6JM",
  authDomain: "react-redux-firebase-slack.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-slack.firebaseio.com",
  projectId: "react-redux-firebase-slack",
  storageBucket: "react-redux-firebase-slack.appspot.com",
  messagingSenderId: "877635346986"
};
firebase.initializeApp(config);

export default firebase;
