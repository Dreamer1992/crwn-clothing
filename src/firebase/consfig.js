import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyA_Qe7gMLQB920PmHh7vyuDndWJkDgOM9s',
  authDomain: 'crwn-db-1483b.firebaseapp.com',
  projectId: 'crwn-db-1483b',
  storageBucket: 'crwn-db-1483b.appspot.com',
  messagingSenderId: '375968271908',
  appId: '1:375968271908:web:6e44cb37831c706397d2b1',
  measurementId: 'G-M7B73Z83KR',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
