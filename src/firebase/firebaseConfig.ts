import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiAiKIv0fYnuSwzyTpluBf7o4Mqs6zpi4",
  authDomain: "actividad-firebase-web.firebaseapp.com",
  projectId: "actividad-firebase-web",
  storageBucket: "actividad-firebase-web.firebasestorage.app",
  messagingSenderId: "239969763165",
  appId: "1:239969763165:web:7a650bd8b488eb7214f2b4",
  measurementId: "G-57PJ81NTKJ"
};

const app = initializeApp(firebaseConfig);

export const authService = getAuth(app);