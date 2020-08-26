import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBCh0UwKlhXaK5rvaeJpta_TYVD-6fodb0",
    authDomain: "prasan-kumar.firebaseapp.com",
    databaseURL: "https://prasan-kumar.firebaseio.com",
    projectId: "prasan-kumar",
    storageBucket: "prasan-kumar.appspot.com",
    messagingSenderId: "381609708222",
    appId: "1:381609708222:web:3edef8e4e65da6d2a06cef",
    measurementId: "G-8BC7PW8Z97"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;