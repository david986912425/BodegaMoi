import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDi2Ooepo08hAYtVDKpJg59UYUftoudHl8",
  authDomain: "bodegamoi-b2b97.firebaseapp.com",
  projectId: "bodegamoi-b2b97",
  storageBucket: "bodegamoi-b2b97.appspot.com",
  messagingSenderId: "60796902217",
  appId: "1:60796902217:web:12b26ce6951dd7672bd898"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app;

//const auth = firebase.auth();

//export { auth } ;
