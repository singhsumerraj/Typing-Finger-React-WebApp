import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7dV230dwvZYajuWRVQghnAzhaZi2b9Q8",
  authDomain: "typing-finger.firebaseapp.com",
  projectId: "typing-finger",
  storageBucket: "typing-finger.appspot.com",
  messagingSenderId: "594195574625",
  appId: "1:594195574625:web:10c2b3e8679fb31e30df20",
  measurementId: "G-528D2KKSKS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
