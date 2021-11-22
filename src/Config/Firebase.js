// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, 
    createUserWithEmailAndPassword , 
     signInWithEmailAndPassword ,
     signOut ,
     onAuthStateChanged } 
     from "firebase/auth";
     import { getDatabase,
      get,
       set,
       push,
       remove,
       ref, 
      onValue,
      onChildAdded,
      child  
          } 
     from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjYaBamfzCZU3zMEFv1D5BWrHBfKG_tlQ",
  authDomain: "react-firebase-and-database.firebaseapp.com",
  projectId: "react-firebase-and-database",
  storageBucket: "react-firebase-and-database.appspot.com",
  messagingSenderId: "470856348551",
  appId: "1:470856348551:web:b72f06e31450acc15a5922",
  measurementId: "G-7NFS4J0G46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app)

export {
    auth,
    db,
    createUserWithEmailAndPassword, 
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged,
     set,
     push,
     remove,
     ref, 
    onValue,
    onChildAdded,
    child,
    get 
};