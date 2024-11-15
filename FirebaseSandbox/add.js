// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  push,
  serverTimestamp,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBYFQnjbNzoNZz6lSUaZDvSSnGmU61KCHk",
    authDomain: "humberdemojupet.firebaseapp.com",
    projectId: "humberdemojupet",
    storageBucket: "humberdemojupet.firebasestorage.app",
    messagingSenderId: "18339451158",
    appId: "1:18339451158:web:60a7f3f44822659d15c037"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
const database = getDatabase();
const messages = ref(database, "/messages");

const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  const name = document.getElementById("name");
  const message = document.getElementById("message");

  const newMessage = push(messages);

  set(newMessage, {
    name: name.value,
    message: message.value,
    created_at: serverTimestamp(),
  });

  name.value = "";
  message.value = "";
});