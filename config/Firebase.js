import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBP7JN8gJkdLwUk108uovH4J4qiBiIEk78",
    authDomain: "fir-afdcf.firebaseapp.com",
    databaseURL: "https://fir-afdcf.firebaseio.com",
    projectId: "fir-afdcf",
    storageBucket: "fir-afdcf.appspot.com",
    messagingSenderId: "687958996505",
    appId: "1:687958996505:web:adef039902fb61dd4e5c88",
    measurementId: "G-DCW1YF24GG"
}


const Firebase = firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default Firebase;

// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

// firebase.initializeApp({
//   apiKey: "AIzaSyBP7JN8gJkdLwUk108uovH4J4qiBiIEk78",
//   authDomain: "fir-afdcf.firebaseapp.com",
//   projectId: "fir-afdcf",
// });

// var db = firebase.firestore();
