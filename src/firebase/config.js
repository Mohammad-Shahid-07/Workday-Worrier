import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDNp6FQ_BFROYJijSRgo_ZxinZP503DAEU",
  authDomain: "workday-warriors.firebaseapp.com",
  projectId: "workday-warriors",
  storageBucket: "workday-warriors.appspot.com",
  messagingSenderId: "894945792928",
  appId: "1:894945792928:web:745761c4a556ba2171cac5"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }