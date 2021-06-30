// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBiaoL28tuv3xip_o9ycs5Y6mqZNeLg_qU",
    authDomain: "pinpointstay-here.firebaseapp.com",
    projectId: "pinpointstay-here",
    storageBucket: "pinpointstay-here.appspot.com",
    messagingSenderId: "125101383147",
    appId: "1:125101383147:web:026db8da43d74eb6714dae",
    measurementId: "G-7GV4RVDKY5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const storage = firebase.storage();

  export {auth,db,storage};