

//manually require both Firebase and Cloud Firestore.
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCrCsxxIIYTUpF8uJ12a49UTsDx9KIrbtU",
    authDomain: "white-sand-beach.firebaseapp.com",
    projectId: "white-sand-beach",
    storageBucket: "white-sand-beach.appspot.com",
    messagingSenderId: "195541876312",
    appId: "1:195541876312:web:9c2e5805b988c51071542d",
  };

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
