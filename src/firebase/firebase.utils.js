import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBfvcSte_lVw91YQzOm56SDm3HkH7tc-JQ',
  authDomain: 'e-comerce-db.firebaseapp.com',
  databaseURL: 'https://e-comerce-db.firebaseio.com',
  projectId: 'e-comerce-db',
  storageBucket: '',
  messagingSenderId: '651224800016',
  appId: '1:651224800016:web:dc0a52e53f2a7264',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const assignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;