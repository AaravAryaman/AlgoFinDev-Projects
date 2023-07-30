// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHEzSe_PUNrVx79yzT35EadjjAFLyRqqU",
  authDomain: "focus-app-b49ac.firebaseapp.com",
  databaseURL: "https://focus-app-b49ac-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "focus-app-b49ac",
  storageBucket: "focus-app-b49ac.appspot.com",
  messagingSenderId: "51589546169",
  appId: "1:51589546169:web:0f07447d417717a5761b68"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
