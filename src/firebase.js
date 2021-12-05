import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBDg4HmQsP91kisRTqgasG3i01L66S9EbU",
    authDomain: "movieflix-e5c0b.firebaseapp.com",
    projectId: "movieflix-e5c0b",
    storageBucket: "movieflix-e5c0b.appspot.com",
    messagingSenderId: "118400459637",
    appId: "1:118400459637:web:95309f6ca63c88f52ee93c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db