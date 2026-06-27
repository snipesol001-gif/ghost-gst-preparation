import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, onValue, onDisconnect, serverTimestamp, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBwCmFoPcRqgfKMxGePtJqjRR1DDXe71M",
    authDomain: "ghost-gst.firebaseapp.com",
    databaseURL: "https://ghost-gst-default-rtdb.firebaseio.com",
    projectId: "ghost-gst",
    storageBucket: "ghost-gst.firebasestorage.app",
    messagingSenderId: "286020225827",
    appId: "1:286020225827:web:0c513d43e4ce36d8d91a96"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue, onDisconnect, serverTimestamp, remove };