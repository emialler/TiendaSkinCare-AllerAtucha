import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbN-UWMl7yLIg0J9j1S28OvZU_UufKZGY",
  authDomain: "cursoreact-d88b0.firebaseapp.com",
  projectId: "cursoreact-d88b0",
  storageBucket: "cursoreact-d88b0.appspot.com",
  messagingSenderId: "856332843944",
  appId: "1:856332843944:web:7af0292a420c836d223b9d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const productosCollection = collection(db, "productos")
export const ordenesCollection = collection(db, "ordenes")