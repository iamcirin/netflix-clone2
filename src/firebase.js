import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { toast } from 'react-toastify'

const firebaseConfig = {
  apiKey: 'AIzaSyC8dkPabpAbZd4yN6BoW-8amVF6SUjD2Bc',
  authDomain: 'netflix-clone-da4ce.firebaseapp.com',
  projectId: 'netflix-clone-da4ce',
  storageBucket: 'netflix-clone-da4ce.appspot.com',
  messagingSenderId: '30626007516',
  appId: '1:30626007516:web:13ed34361f1f2947982719',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, 'user'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    })
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}

const logout = () => {
  signOut(auth)
}

export { auth, db, login, logout, signup }
