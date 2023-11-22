// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getStorage, ref} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5KWMrBKr4ntJehgZVQEh_QzX6PHjgJ_k",
    authDomain: "rn-monngonnoingay.firebaseapp.com",
    projectId: "rn-monngonnoingay",
    storageBucket: "rn-monngonnoingay.appspot.com",
    messagingSenderId: "459805684104",
    appId: "1:459805684104:web:53b1f7c4557238888b8a3d",
    measurementId: "G-6ZNJRD1V0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Create a root reference
export const storage = getStorage(app);
// Create a reference to 'mountains.jpg'
const mountainsRef = ref(storage, 'mountains.jpg');

// Create a reference to 'images/mountains.jpg'
const mountainImagesRef = ref(storage, 'images/mountains.jpg');

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name;           // true
mountainsRef.fullPath === mountainImagesRef.fullPath;   // false
