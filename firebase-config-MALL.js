import firebase from 'firebase'

const config = {
  apiKey: "DIN-API-KEY",
  authDomain: "DIN-DOMAIN",
  databaseURL: "DIN-URL",
  projectId: "DITT-ID",
  storageBucket: "DITT-STORAGE",
  messagingSenderId: "DITT-SENDER-ID"
};
const fb = firebase.initializeApp(config);
const db = firebase.database()

export {db, fb};
