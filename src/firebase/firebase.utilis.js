import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB4kz09s-QECCZIFyCk_pbAGZGaft3TON8",
    authDomain: "crwn-db-2686f.firebaseapp.com",
    databaseURL: "https://crwn-db-2686f.firebaseio.com",
    projectId: "crwn-db-2686f",
    storageBucket: "",
    messagingSenderId: "296963340025",
    appId: "1:296963340025:web:39852def89ca38fc"
  };

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;