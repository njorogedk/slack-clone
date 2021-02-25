import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCnYXZBGqg9zJmelmx95LFkIaSXnHQ5-Q8",
  authDomain: "slack-clone-challenge-8b8bc.firebaseapp.com",
  projectId: "slack-clone-challenge-8b8bc",
  storageBucket: "slack-clone-challenge-8b8bc.appspot.com",
  messagingSenderId: "509144420840",
  appId: "1:509144420840:web:348d59e9fa64e6117f545d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;