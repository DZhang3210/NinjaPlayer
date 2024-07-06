// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcbolrm1fL9P8_u7VnNGreTE3gKQNMw_E",
  authDomain: "ninjaplayerproject.firebaseapp.com",
  projectId: "ninjaplayerproject",
  storageBucket: "ninjaplayerproject.appspot.com",
  messagingSenderId: "960751445477",
  appId: "1:960751445477:web:f872aa05d260c426de3b0c",
  measurementId: "G-KVCHCF9WBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app