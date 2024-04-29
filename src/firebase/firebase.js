import {
    initializeApp
} from "firebase/app";

import {
    getFirestore
} from "firebase/firestore";
import {
    getStorage
} from "firebase/storage";
import {
    getAuth
} from "firebase/auth";
import {
    initializeFirestore
} from "firebase/firestore";
import {
    getDatabase
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAahk98cgZNn9K61IRPHFkhYBmXm1P8IN8",
    authDomain: "music-5761e.firebaseapp.com",
    projectId: "music-5761e",
    storageBucket: "music-5761e.appspot.com",
    messagingSenderId: "870008717524",
    appId: "1:870008717524:web:01527f6a11165426803b41",
    measurementId: "G-H6WKN0XDFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firebase auth
const auth = getAuth(app);
const db = getFirestore(app)
const dbase = getDatabase(app);
const storage = getStorage(app);
export {
    auth,
    db,
    storage,
    dbase
}
let isAuthenticated = false;

export function getIsAuthenticated() {
    return isAuthenticated;
}

export function setIsAuthenticated(value) {
    isAuthenticated = value;
}