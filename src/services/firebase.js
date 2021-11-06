// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth} from "firebase/auth"

initializeApp({
    apiKey: "AIzaSyAgpNrjLNGEDKEPkqF9tISz-F11gHiSDxEa",
    authDomain: "fir-react-19d08.firebaseapp.com",
    projectId: "fir-react-19d08",
    storageBucket: "fir-react-19d08.appspot.com",
    messagingSenderId: "584095717609",
    appId: "1:584095717609:web:a62b5fd3c8faa25cf3b878"
});

export const db = getFirestore();
export const auth = getAuth();

//git fetch origin rama
//git merge rama

//git pull

//Commit -> Mensaje para el merge

