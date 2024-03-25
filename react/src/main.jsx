// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBolC7ddDbY-e2O8pv1tX4V_vWs6BBGCM",
  authDomain: "proyectofinalreact-3f8e6.firebaseapp.com",
  projectId: "proyectofinalreact-3f8e6",
  storageBucket: "proyectofinalreact-3f8e6.appspot.com",
  messagingSenderId: "568599156024",
  appId: "1:568599156024:web:6d83a71e3f3edde32c9dcd",
  measurementId: "G-VQ3YXKDMFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);