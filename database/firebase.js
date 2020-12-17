import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAjGUwi8A5yQdOG9jNsCA_dojxu7UFhifQ",
    authDomain: "native-firebase-51c6d.firebaseapp.com",
    projectId: "native-firebase-51c6d",
    storageBucket: "native-firebase-51c6d.appspot.com",
    messagingSenderId: "50058797112",
    appId: "1:50058797112:web:b174486c7dbfe3caacc6cd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default{
    firebase,
    db
  }