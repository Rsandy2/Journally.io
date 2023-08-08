import { GithubAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBMQsKgFfowvQNGltKP7afCfK6vpgAXypI",
  authDomain: "journally-8df46.firebaseapp.com",
  projectId: "journally-8df46",
  storageBucket: "journally-8df46.appspot.com",
  messagingSenderId: "70922325544",
  appId: "1:70922325544:web:b6231f27f47a4906992f1d",
  measurementId: "G-0FEF1TLR5C",
};

const app = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

export default getAuth(app);
export const auth = getAuth(app);
