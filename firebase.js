// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2y8sg4QBpPOOS0_A_LXhJg16BqNLblD8",
  authDomain: "react-native-9159d.firebaseapp.com",
  projectId: "react-native-9159d",
  storageBucket: "react-native-9159d.appspot.com",
  messagingSenderId: "707636345917",
  appId: "1:707636345917:web:8290a293c8647db581fe54",
  measurementId: "G-JCEEDRTNQM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
