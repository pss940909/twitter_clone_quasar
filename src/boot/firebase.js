import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG8J7zWhDN398esSJv8PvO1Dojy-qmlgo",
  authDomain: "qwitter-f61af.firebaseapp.com",
  projectId: "qwitter-f61af",
  storageBucket: "qwitter-f61af.appspot.com",
  messagingSenderId: "958511640073",
  appId: "1:958511640073:web:aecb2fe4efb8be5fca52d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
