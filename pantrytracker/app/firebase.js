// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlfhEm533WNUz72532VIGUPN05ae7vQkE",
  authDomain: "inventory-management-74e04.firebaseapp.com",
  projectId: "inventory-management-74e04",
  storageBucket: "inventory-management-74e04.appspot.com",
  messagingSenderId: "252143825515",
  appId: "1:252143825515:web:f0336f8402b264feb2372e",
  measurementId: "G-DJC2XGFXKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}
