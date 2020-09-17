import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDx8nYtvdIGDcxQ3O51fF8NCf8tGpO3q9w",
  authDomain: "whatsapp-clone-cc5b1.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-cc5b1.firebaseio.com",
  projectId: "whatsapp-clone-cc5b1",
  storageBucket: "whatsapp-clone-cc5b1.appspot.com",
  messagingSenderId: "912106551862",
  appId: "1:912106551862:web:dda1a0cb1d6187d2847697",
  measurementId: "G-2H688PMDG6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db