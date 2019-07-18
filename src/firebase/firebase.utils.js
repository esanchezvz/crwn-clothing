import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDXFdrlVRLpNq3KOY3RjcQBJUf0yi-iy0E',
  authDomain: 'crwn-react.firebaseapp.com',
  databaseURL: 'https://crwn-react.firebaseio.com',
  projectId: 'crwn-react',
  storageBucket: '',
  messagingSenderId: '1077471742785',
  appId: '1:1077471742785:web:c8b7ceca3a07097a'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
