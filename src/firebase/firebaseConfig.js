import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASRys1PSHYwKfF2Z0lmFaYD4qWe3_yFI4",
    authDomain: "telegram-tailwind.firebaseapp.com",
    projectId: "telegram-tailwind",
    storageBucket: "telegram-tailwind.appspot.com",
    messagingSenderId: "815430270959",
    appId: "1:815430270959:web:7dc7626be1950200a3c01a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()