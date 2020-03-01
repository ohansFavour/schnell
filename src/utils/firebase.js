// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBImNPyZQj3OOR0KM9E7vDddlxjb0SDpiA",
  authDomain: "mercury-3f8fe.firebaseapp.com",
  databaseURL: "https://mercury-3f8fe.firebaseio.com",
  projectId: "mercury-3f8fe",
  storageBucket: "mercury-3f8fe.appspot.com",
  messagingSenderId: "413337604009",
  appId: "1:413337604009:web:3f0756f35f9736a08bfeb8",
  measurementId: "G-WFMEZ4GNPD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export var provider = new firebase.auth.GoogleAuthProvider();
export var provider2 = new firebase.auth.FacebookAuthProvider();

export default firebase;


