// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJfP8f3RunOtpo0UY1QCR9oUo9bm5Zqbs",
  authDomain: "walton-product-sell.firebaseapp.com",
  projectId: "walton-product-sell",
  storageBucket: "walton-product-sell.appspot.com",
  messagingSenderId: "961882019908",
  appId: "1:961882019908:web:ba5de5277fbde3c8d48411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;