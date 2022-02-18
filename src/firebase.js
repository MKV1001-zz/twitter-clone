import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCPpOhdYCBCj-heJGzgHaYWGlDs3NN0suY",
  authDomain: "twitter-clone-3011b.firebaseapp.com",
  projectId: "twitter-clone-3011b",
  storageBucket: "twitter-clone-3011b.appspot.com",
  messagingSenderId: "157355984705",
  appId: "1:157355984705:web:8a5a9502a58ebee2f6c3c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

 
 

export default db; 