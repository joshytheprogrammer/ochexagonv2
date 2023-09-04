import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID

  apiKey: "AIzaSyBNyjVG3h8RZQSkkM13oQl6f7S1Ct0RAsc",
  authDomain: "ochexagonv2.firebaseapp.com",
  projectId: "ochexagonv2",
  storageBucket: "ochexagonv2.appspot.com",
  messagingSenderId: "948447906918",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Initialize Firestore

export { firestore };
