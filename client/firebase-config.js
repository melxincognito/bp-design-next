import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: `${process.env.firebase_api_key}`,
  authDomain: `${process.env.firebase_auth_domain}`,
  databaseURL: `${process.env.firebase_database_url}`,
  projectId: `${process.env.firebase_project_id}`,
  storageBucket: `${process.env.firebase_storage_bucket}`,
  messagingSenderId: `${process.env.firebase_messaging_sender_id}`,
  appId: `${process.env.firebase_app_id}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
