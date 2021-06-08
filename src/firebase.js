import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBsStAX0cYZVqnXnxe1aF7VmsMqgR9sRqY",
    authDomain: "twitter-clone-916ce.firebaseapp.com",
    projectId: "twitter-clone-916ce",
    storageBucket: "twitter-clone-916ce.appspot.com",
    messagingSenderId: "155445362523",
    appId: "1:155445362523:web:8a1e8498a31ff42317a47e",
    measurementId: "G-FQER6R28CS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;