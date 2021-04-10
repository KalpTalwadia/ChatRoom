import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCfrbUng_LyJ912BYONWGBiQv85gQPhpOI",
    authDomain: "slack-d83fc.firebaseapp.com",
    projectId: "slack-d83fc",
    storageBucket: "slack-d83fc.appspot.com",
    messagingSenderId: "212806521313",
    appId: "1:212806521313:web:bcea600281421fc35a42a0"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider,db};