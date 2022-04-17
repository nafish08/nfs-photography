// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBU9hq1LebPKoDEfxpVgPYHRw2w-SuAvM",
    authDomain: "nfs-photography.firebaseapp.com",
    projectId: "nfs-photography",
    storageBucket: "nfs-photography.appspot.com",
    messagingSenderId: "821365530361",
    appId: "1:821365530361:web:6c3ba7aca4f225ae7ecc28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;