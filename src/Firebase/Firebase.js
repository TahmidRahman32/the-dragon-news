// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBbQJcoLRpJ4ttOPBoaxywRgKf_WqamCD0",
   authDomain: "the-news-dragon-1b9e3.firebaseapp.com",
   projectId: "the-news-dragon-1b9e3",
   storageBucket: "the-news-dragon-1b9e3.appspot.com",
   messagingSenderId: "944304242753",
   appId: "1:944304242753:web:233acffdacd02aa73986c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;