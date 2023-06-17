import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDI8sZpXQsVBU-6zJAF8Vu56qXLvBMdgH8",
  authDomain: "print3dverse-f5e77.firebaseapp.com",
  projectId: "print3dverse-f5e77",
  storageBucket: "print3dverse-f5e77.appspot.com",
  messagingSenderId: "1080820376617",
  appId: "1:1080820376617:web:74ee28440644bd5627e838",
  measurementId: "G-P0VQ322TLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);