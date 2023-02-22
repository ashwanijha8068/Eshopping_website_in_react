import firebase from "firebase";
 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnOQdZOFCUCjdTGcLsyoqzPRiktcFMAE8",
    authDomain: "eshopping-website.firebaseapp.com",
    projectId: "eshopping-website",
    storageBucket: "eshopping-website.appspot.com",
    messagingSenderId: "685940465004",
    appId: "1:685940465004:web:b6c7a84271722804502749",
    measurementId: "G-R1QEZ8EHMJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

