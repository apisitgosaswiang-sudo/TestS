import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNqoMN6VHh1OqShZ0LZL0mYCaH28orx-g",
  authDomain: "online-trainer-c.firebaseapp.com",
  databaseURL: "https://online-trainer-c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "online-trainer-c",
  storageBucket: "online-trainer-c.firebasestorage.app",
  messagingSenderId: "93729536725",
  appId: "1:93729536725:web:56efadd1a93563fe63805c",
  measurementId: "G-1ZZBFHNS4R"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);
const dataRef = ref(database, "workoutTrackerData");

export { auth, dataRef, get, set, signInAnonymously };
