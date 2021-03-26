import firebase from 'firebase'
import 'firebase/storage'
// import 'firebase/firestore'
if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyANEgLLr8YTJuo43M4BP0Ds0JB0VndY3SU",
        authDomain: "a-travelo-refaat.firebaseapp.com",
        projectId: "a-travelo-refaat",
        storageBucket: "a-travelo-refaat.appspot.com",
        messagingSenderId: "364022535056",
        appId: "1:364022535056:web:92c90762e6ee5e1edd5915",
        measurementId: "G-VXEEKVJ3E8"
    }
    firebase.initializeApp(config)
    // firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.database()
const storageDB = firebase.storage()
export {fireDb, storageDB}
