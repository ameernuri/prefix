import admin, { ServiceAccount } from 'firebase-admin'

const serviceAccount: any = {
  project_id: 'prefix-dev',
  private_key: process.env.FIREBASE_PRIVATE_KEY,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
}

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL:
        'https://console.firebase.google.com/u/0/project/prefix-dev/database/data/',
    })
  } catch (err) {
    console.error('Firebase admin init error:', err)
  }
}

export default admin.firestore()
