import firebase from 'firebase';

const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyBA1WaX-00XxgACtPzVdvPu_rOZUt32I_8",
  authDomain: "clone-ch.firebaseapp.com",
  projectId: "clone-ch",
  storageBucket: "clone-ch.appspot.com",
  messagingSenderId: "1090256612359",
  appId: "1:1090256612359:web:160591785abcef4a0b0ea2"
})

const db = firebase.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider } 

export default db