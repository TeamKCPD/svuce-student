import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyBAaEWCTpa_4_EXtEn4bbueiCjfe8ibo94",
  authDomain: "sampradya.firebaseapp.com",
  databaseURL:
    "https://sampradya-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sampradya",
  storageBucket: "sampradya.appspot.com",
  messagingSenderId: "545526981994",
  appId: "1:545526981994:web:0e666e6cc3b3960c127113",
  measurementId: "G-PT18DXZY3M",
};

const app = initializeApp(firebaseConfig);

// Get the Firebase services you need
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth,db };
