import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAebfTpoi28XPZPFS_pFXhFChD71vAdqaA",

  authDomain: "fir-auth-b243c.firebaseapp.com",

  databaseURL: "https://fir-auth-b243c-default-rtdb.firebaseio.com",

  projectId: "fir-auth-b243c",

  storageBucket: "fir-auth-b243c.appspot.com",

  messagingSenderId: "484877132775",

  appId: "1:484877132775:web:360566548e9da362ea1342"

};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
