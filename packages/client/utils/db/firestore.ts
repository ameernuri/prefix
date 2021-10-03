import admin from 'firebase-admin'
import serviceAccount from '../../firestore-service-account.json'

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.stringify(serviceAccount)),
      databaseURL: 'https://prefix-dev.firebaseio.com',
    })
  } catch (err) {
    console.error('Firebase admin init error:', err)
  }
}

export default admin.firestore()
