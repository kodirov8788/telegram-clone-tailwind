import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCK6joI9x4ZmqFMQtNPt8QMDeimgQNt8ZY",
    authDomain: "todo-app-da53d.firebaseapp.com",
    databaseURL: "https://todo-app-da53d-default-rtdb.firebaseio.com",
    projectId: "todo-app-da53d",
    storageBucket: "todo-app-da53d.appspot.com",
    messagingSenderId: "376029958099",
    appId: "1:376029958099:web:b3a15e6906e43d079ae926"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const firestore = getFirestore() 