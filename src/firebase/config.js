import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD9tuFo_aWjBSOe066V6YWWRdXqLF2_IB4',
  authDomain: 'vue3-firebase-1dca6.firebaseapp.com',
  projectId: 'vue3-firebase-1dca6',
  storageBucket: 'vue3-firebase-1dca6.appspot.com',
  messagingSenderId: '1098853502149',
  appId: '1:1098853502149:web:bcc0dc6b7da7454e6074ac',
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init firestore
const db = firebase.firestore();

export { db };
