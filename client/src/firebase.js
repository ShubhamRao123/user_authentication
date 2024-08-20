// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authentication-a47f2.firebaseapp.com",
  projectId: "authentication-a47f2",
  storageBucket: "authentication-a47f2.appspot.com",
  messagingSenderId: "768205713516",
  appId: "1:768205713516:web:8ad3acc4ca713305c32849",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
