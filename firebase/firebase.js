import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNyjVG3h8RZQSkkM13oQl6f7S1Ct0RAsc",
  authDomain: "ochexagonv2.firebaseapp.com",
  projectId: "ochexagonv2",
  storageBucket: "ochexagonv2.appspot.com",
  messagingSenderId: "948447906918",
  appId: "1:948447906918:web:68b9575cde6c17ffb2b1a7"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); 

export { firestore };
