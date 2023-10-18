import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC4k6RMb86hVqbLipJipuJ8PVEKSsBqlhc",
  authDomain: "assignment-ten-692a3.firebaseapp.com",
  projectId: "assignment-ten-692a3",
  storageBucket: "assignment-ten-692a3.appspot.com",
  messagingSenderId: "217718736941",
  appId: "1:217718736941:web:9fadffea09203d813050a4",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
