
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBKJieQENDdCah87MC-PDdpdQcnChKIf-A",
  authDomain: "fb-messenger-clone-bc070.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-bc070.firebaseio.com",
  projectId: "fb-messenger-clone-bc070",
  storageBucket: "fb-messenger-clone-bc070.appspot.com",
  messagingSenderId: "454559138284",
  appId: "1:454559138284:web:ba4ca48b152b8976c680c9",
  measurementId: "G-EJV2TLV0G7"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db; 