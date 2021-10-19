import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCdQbYDUu1T7FeLN6fn9Qr4y6uT2BgzeUU',
  authDomain: 'prefix-dev.firebaseapp.com',
  projectId: 'prefix-dev',
  storageBucket: 'prefix-dev.appspot.com',
  messagingSenderId: '943019321772',
  appId: '1:943019321772:web:7351f20c9937ac53d73209',
  measurementId: 'G-3FQ862J9N2',
}

const app = initializeApp(firebaseConfig)
// getAnalytics(app)

export const db = getFirestore(app)
