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
  appId: '1:1077471742785:web:c8b7ceca3a07097a',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      console.log('Crear documento en db\n', userAuth);
      console.log('Datos a guardar ->\n');
      console.table({
        displayName: displayName,
        email: email,
        createdAt,
        ...additionalData,
      });
      await userRef.set({
        displayName: displayName,
        email: email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      alert('Error occurred. \nCheck console for error.');
      console.log('error creating user\n', err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
