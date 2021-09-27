import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCrA3t0G6ppnijmlUd236q1qLlx50cKYjs",
    authDomain: "slack-chat-app-610a0.firebaseapp.com",
    projectId: "slack-chat-app-610a0",
    storageBucket: "slack-chat-app-610a0.appspot.com",
    messagingSenderId: "879758759820",
    appId: "1:879758759820:web:be4031fc10a616eeafe8a9",
    measurementId: "G-ZM1P7F5R4C"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };

export default firebase;
