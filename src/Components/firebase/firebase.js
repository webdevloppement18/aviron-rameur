
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCZgbe7upt87YevuqNDqNKj5FExayhAcvE",
  authDomain: "aviron-rameur-44db8.firebaseapp.com",
  projectId: "aviron-rameur-44db8",
  storageBucket: "aviron-rameur-44db8.firebasestorage.app",
  messagingSenderId: "109063737858",
  appId: "1:109063737858:web:579a0fa329dc487e260d1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 


export const auth = getAuth(app)
export const db = getFirestore(app)

export default app;