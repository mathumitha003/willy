import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBuYHHweOJzWks89d28qA9c4bWSzjV_C_I",
    authDomain: "willy3-dd088.firebaseapp.com",
    projectId: "willy3-dd088",
    storageBucket: "willy3-dd088.appspot.com",
    messagingSenderId: "316021251228",
    appId: "1:316021251228:web:54d841479c6885f0e4a159"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();