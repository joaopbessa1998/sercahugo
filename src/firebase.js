import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBhxrBq7rWRlozwOfmuxunL7SPLX8PJleU",
    authDomain: "serca-furniture-db.firebaseapp.com",
    projectId: "serca-furniture-db",
    storageBucket: "serca-furniture-db.appspot.com",
    messagingSenderId: "986859162385",
    appId: "1:986859162385:web:a4cc5c942a39950bbddab0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);