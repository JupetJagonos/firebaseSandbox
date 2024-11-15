//documentations
// https://firebase.google.com/database/web/read-and-write


//import firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
    getDatabase,
    onValue,
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

  //Initialize Database
  const database = getDatabase();
  const messages = ref(database, "/messages")

  // Load Messages on data event
  onValue(messages,  (snapshot) => {
       //create a reference 
       const ul =document.getElementById("messages");
        //Loop through messages and add them to the ul
        snapshot.forEach((childSnapshot)=> {//console.log(childSnapshot);
            //Fetch the data fromt he snapshot
            const childData = childSnapshot.val ();
            //Create a text node with message and name
            const text = document.createTextNode (
                childData.message + " ~ " + childData.name
            );

            const li = document.createElement ("li");

            li.appendChild(text);
            ul.appendChild(li);
        });


    });