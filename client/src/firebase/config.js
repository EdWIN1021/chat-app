import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAh-KPqFAS7r4ADyNQlWGBSqaeBvQO6Eh8",
  authDomain: "emessage-68a47.firebaseapp.com",
  projectId: "emessage-68a47",
  storageBucket: "emessage-68a47.appspot.com",
  messagingSenderId: "264876314150",
  appId: "1:264876314150:web:ac8e9a58819a56e674e0e7",
};

firebase.initializeApp(firebaseConfig);

export const fireStore = firebase.firestore();
export const auth = firebase.auth();
export const database = firebase.database();
