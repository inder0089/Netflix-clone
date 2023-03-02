import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBiVptvArVL6O_fA27oDpJv-EGr6BX5248",
  authDomain: "netflix-clone-inder-2e56b.firebaseapp.com",
  projectId: "netflix-clone-inder-2e56b",
  storageBucket: "netflix-clone-inder-2e56b.appspot.com",
  messagingSenderId: "449675513777",
  appId: "1:449675513777:web:66d0a1b7297b578e76b790",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
