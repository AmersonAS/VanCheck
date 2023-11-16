import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;
