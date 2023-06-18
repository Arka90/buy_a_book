// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjfpt3nIEofd_D7qr-q-ScoDAY9R918ec",
  authDomain: "buyabook-c17d7.firebaseapp.com",
  projectId: "buyabook-c17d7",
  storageBucket: "buyabook-c17d7.appspot.com",
  messagingSenderId: "280900430913",
  appId: "1:280900430913:web:862054584e038ffc512ac0",
  measurementId: "G-QXE51EJC8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
