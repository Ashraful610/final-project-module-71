// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF9R1O_rqlCIA4ixirhKGqRe9a_S5PwlE",
  authDomain: "doctors-portal-d9f5c.firebaseapp.com",
  projectId: "doctors-portal-d9f5c",
  storageBucket: "doctors-portal-d9f5c.appspot.com",
  messagingSenderId: "1088864697013",
  appId: "1:1088864697013:web:f3c51b135940ef741b1cfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth