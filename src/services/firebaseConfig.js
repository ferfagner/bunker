// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj6c4yf5HhJtauTqN0PcZ-HbNLks1Hg9A",
  authDomain: "bunker-d3adf.firebaseapp.com",
  projectId: "bunker-d3adf",
  storageBucket: "bunker-d3adf.appspot.com",
  messagingSenderId: "833137155255",
  appId: "1:833137155255:web:be39517599886abb6dc132",
  measurementId: "G-RRQEBM96GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app 