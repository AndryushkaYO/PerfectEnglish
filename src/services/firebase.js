import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA5Nntl3gZj9GvqgMzGa4JDhYhFpbw4Hpo",
    authDomain: "perfectenglish-4c79b.firebaseapp.com",
    databaseURL: "https://perfectenglish-4c79b.firebaseio.com",
    projectId: "perfectenglish-4c79b",
    storageBucket: "perfectenglish-4c79b.appspot.com",
    messagingSenderId: "312899058644"
  };

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;