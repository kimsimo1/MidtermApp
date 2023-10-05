import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGV7gajPA2TZMtF4oFQf_a2bKq4JPyvLU",
  authDomain: "to-do-app-6ce2a.firebaseapp.com",
  projectId: "to-do-app-6ce2a",
  storageBucket: "to-do-app-6ce2a.appspot.com",
  messagingSenderId: "186544258180",
  appId: "1:186544258180:web:7346e7091e47f19e3796d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };


















