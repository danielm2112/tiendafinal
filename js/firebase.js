// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcfNaowazomvH3ir8xVm_JWSD5BzQzQcA",
  authDomain: "danieltiendacesde.firebaseapp.com",
  projectId: "danieltiendacesde",
  storageBucket: "danieltiendacesde.appspot.com",
  messagingSenderId: "403627539440",
  appId: "1:403627539440:web:f04734b08a008dffcafb35",
  measurementId: "G-ZSBJV5523M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);