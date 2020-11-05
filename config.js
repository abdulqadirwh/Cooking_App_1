import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAOMJONhZUYyQUnZnb43qjTazVXCz_Bbjg",
    authDomain: "cookingapp-336f8.firebaseapp.com",
    databaseURL: "https://cookingapp-336f8.firebaseio.com",
    projectId: "cookingapp-336f8",
    storageBucket: "cookingapp-336f8.appspot.com",
    messagingSenderId: "316349934995",
    appId: "1:316349934995:web:3af92a61dd8d854eef4c66"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();