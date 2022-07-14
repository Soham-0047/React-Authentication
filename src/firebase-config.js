import { initializeApp } from "firebase/app";
import {getAuth}  from 'firebase/auth';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_DATABASE_URL}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: "noton-60a6d.appspot.com",
  messagingSenderId: `${process.env.REACT_APP_SENDER_ID}`,
  appId:`${process.env.REACT_APP_APP_ID}`,
  measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`
};
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
