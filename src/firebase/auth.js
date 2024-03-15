import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "REACT_APP_FIREBASE_API_KEY",
    authDomain: "REACT_APP_FIREBASE_AUTH_DOMAIN",
    projectId: "REACT_APP_FIREBASE_PROJECT_ID",
    storageBucket: "REACT_APP_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
    appId: "REACT_APP_FIREBASE_APP_ID",
    measurementId: "REACT_APP_FIREBASE_MEASUREMENT_ID",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
