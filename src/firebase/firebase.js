// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV5XUDghgQW3RKue-RiEj1YlOnwAo_EGw",
  authDomain: "restaurant-f12af.firebaseapp.com",
  projectId: "restaurant-f12af",
  storageBucket: "restaurant-f12af.appspot.com",
  messagingSenderId: "64526306177",
  appId: "1:64526306177:web:8ee5d47e8f3e81f2137680",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
