// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcVYqFyy92ikwizx9Tzbb6XudAR9sX1TM",
  authDomain: "e-shop-a0102.firebaseapp.com",
  databaseURL: "https://e-shop-a0102.firebaseio.com",
  projectId: "e-shop-a0102",
  storageBucket: "e-shop-a0102.appspot.com",
  messagingSenderId: "491436660257",
  appId: "1:491436660257:web:b323742928788162aff560",
  measurementId: "G-1Q36VNM9BG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
