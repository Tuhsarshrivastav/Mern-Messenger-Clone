import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
 //passte heere yur firrebase config cdn key from firebase
});

const db = firebaseApp.firestore();

export default db;
