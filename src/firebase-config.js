// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore}  from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACbgZ9QzDKroa32nrZG19z-fe5AJfxtyM",
  authDomain: "acl-recovery.firebaseapp.com",
  projectId: "acl-recovery",
  storageBucket: "acl-recovery.appspot.com",
  messagingSenderId: "361606349167",
  appId: "1:361606349167:web:9a297abb47f08ff1bfe89a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);