import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIPgac3tn_xkozYOHYy4HsshOkdfv_oxg",
  authDomain: "react-netflix-clone-e78f3.firebaseapp.com",
  projectId: "react-netflix-clone-e78f3",
  storageBucket: "react-netflix-clone-e78f3.appspot.com",
  messagingSenderId: "880115701918",
  appId: "1:880115701918:web:a9bcb470c8c17668ca438f",
  measurementId: "G-6SWHWFR873"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);