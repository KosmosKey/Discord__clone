import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3PbcQNGNQhjqIvtJFRHcRJXkOBHY8UZw",
  authDomain: "disoc-26641.firebaseapp.com",
  databaseURL: "https://disoc-26641.firebaseio.com",
  projectId: "disoc-26641",
  storageBucket: "disoc-26641.appspot.com",
  messagingSenderId: "1054626005636",
  appId: "1:1054626005636:web:e6432d8aa62cd2b8e4f8d1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
