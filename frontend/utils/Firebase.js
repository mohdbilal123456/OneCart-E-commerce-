// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "loginonecart-ba000.firebaseapp.com",
  projectId: "loginonecart-ba000",
  storageBucket: "loginonecart-ba000.firebasestorage.app",
  messagingSenderId: "403118445173",
  appId: "1:403118445173:web:ace7b93706fca189bb5e3c"
};
// console.log("API KEY: ", import.meta.env.VITE_FIREBASE_API_KEY)


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}