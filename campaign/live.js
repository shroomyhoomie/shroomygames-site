// Copper & Curios live board: Firebase connection shared by the player page and the DM kit.
// This config is meant to be public. Security comes from the Firestore rules (only the DM can edit the board).
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, doc, onSnapshot, getDoc, getDocs, setDoc, updateDoc, deleteDoc, deleteField, writeBatch }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBC41QL3V1xRITK11oR7JfNrIWqnFL6bjA",
  authDomain: "copper-and-curios.firebaseapp.com",
  projectId: "copper-and-curios",
  storageBucket: "copper-and-curios.firebasestorage.app",
  messagingSenderId: "542243088239",
  appId: "1:542243088239:web:737166e68f29f2a4152a9a"
};

export const DM_EMAIL = "shroomygamedev@gmail.com";
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { signInAnonymously, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut,
         collection, doc, onSnapshot, getDoc, getDocs, setDoc, updateDoc, deleteDoc, deleteField, writeBatch };
