// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


import {getAth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEIV4CNfQOXu20QrIjJI9-eSQcUOqCj7U",
  authDomain: "user-profile-c5101.firebaseapp.com",
  projectId: "user-profile-c5101",
  storageBucket: "user-profile-c5101.appspot.com",
  messagingSenderId: "888985529358",
  appId: "1:888985529358:web:10f8ea872686f5a668a05f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;