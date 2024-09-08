// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN11F8Ri6Sy6TWZmQ5xDtm-RyfsglEyiQ",
  authDomain: "disease-9372c.firebaseapp.com",
  projectId: "disease-9372c",
  storageBucket: "disease-9372c.appspot.com",
  messagingSenderId: "364734401573",
  appId: "1:364734401573:web:b43e00745085906d7283cc",
  measurementId: "G-C6K5LJZ6WP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };