 import firebase from 'firebase'
 import firestore from 'firebase/firestore'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCxaZaHS9HfRKub1E5RmxT12jCiCGpi9mM",
    authDomain: "smoothies-e64fb.firebaseapp.com",
    databaseURL: "https://smoothies-e64fb.firebaseio.com",
    projectId: "smoothies-e64fb",
    storageBucket: "smoothies-e64fb.appspot.com",
    messagingSenderId: "6797556539"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})

  export default firebaseApp.firestore();