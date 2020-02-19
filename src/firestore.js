import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyC9jxmCatDhyhlC0nSZEkXNzYvPtzHQD80",
    authDomain: "mithya2020.firebaseapp.com",
    databaseURL: "https://mithya2020.firebaseio.com",
    projectId: "mithya2020",
    storageBucket: "mithya2020.appspot.com",
    messagingSenderId: "360038153489",
    appId: "1:360038153489:web:3ae066d51778759ea1e0b0",
    measurementId: "G-R81S0KHW3S"
  };
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;