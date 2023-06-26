import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA6Uy8394QSa4p0cMlGPjDI61B84vQ3ZxY",
    authDomain: "my-health-d3943.firebaseapp.com",
    projectId: "my-health-d3943",
    storageBucket: "my-health-d3943.appspot.com",
    messagingSenderId: "336549890653",
    appId: "1:336549890653:web:d2b2a1f7ef8ab230dc5bb4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }