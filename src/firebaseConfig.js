import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD0yQUgLSZdwpZJIPpuT1rvVf9AGK-yauI",
    authDomain: "bsafe-8ebbc.firebaseapp.com",
    projectId: "bsafe-8ebbc",
    storageBucket: "bsafe-8ebbc.appspot.com",
    messagingSenderId: "648545722460",
    appId: "1:648545722460:web:555629e1c165ef55ab8699"
  };

  let firebaseApp

  if (!firebase.apps.length) {

    firebaseApp = firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  
  //export const authh = firebase.auth() 
  export const db = firebase.firestore()
  console.log('export');
