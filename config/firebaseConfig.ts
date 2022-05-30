import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCDvQgMBOuBTGItzL75lCKX-bcrIi1Ffc",
  authDomain: "nfticket-55bf1.firebaseapp.com",
  projectId: "nfticket-55bf1",
  storageBucket: "nfticket-55bf1.appspot.com",
  messagingSenderId: "1087054711077",
  appId: "1:1087054711077:web:25cb60b871f6d935aaf2cc",
  measurementId: "G-2E9RM8L0ND"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);