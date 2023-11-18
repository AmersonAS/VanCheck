import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCcPrB4ymxdbmlHkU4R9iBL00bhUISQrw4',
  authDomain: 'vancheck-ac61b.firebaseapp.com',
  projectId: 'vancheck-ac61b',
  storageBucket: 'vancheck-ac61b.appspot.com',
  messagingSenderId: '324311964115',
  appId: '1:324311964115:web:a8a4a106579018b00bf726',
  measurementId: 'G-HTF2E67BHD',
};

// Initialize Firebase, Firestore and Auth
const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);
const auth = initializeAuth(firebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

//Observador para idenfitificar user atual
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
  } else {
    // User is signed out
    // ...
  }
});

export { firebase, firestore, auth };
