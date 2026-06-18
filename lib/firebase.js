import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";


import { getAI, getGenerativeModel, VertexAIBackend } from "firebase/ai";



const firebaseConfig = {
   apiKey: "AIzaSyCAvBFxqIsm7RFvxgumgyAp7RXVpC_s7mA",
  authDomain: "hyratic.firebaseapp.com",
  projectId: "hyratic",
  storageBucket: "hyratic.firebasestorage.app",
  messagingSenderId: "532284797048",
  appId: "1:532284797048:web:33641212b74078e9147d8d",
  measurementId: "G-ZXRDDN4NBD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider =
  new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Initialize the Vertex AI Gemini API backend service.
// Specify `global` as the location to access the model.
// Initialize the Gemini Developer API backend service
const ai = getAI(app, { backend: new VertexAIBackend('global') });

// Create a `GenerativeModel` instance with a model that supports your use case
export const model = getGenerativeModel(ai, { model: "gemini-2.5-flash" });
