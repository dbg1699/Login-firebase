// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { collection, getFirestore, addDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL9butzFKB1vl7fzFGCyP5q1bVMRMmq34",
  authDomain: "login-105eb.firebaseapp.com",
  projectId: "login-105eb",
  storageBucket: "login-105eb.appspot.com",
  messagingSenderId: "464474497449",
  appId: "1:464474497449:web:6f6cddedeb5836cd30e4b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore();

//Exportar los datos a GUARDAR: correo y contraseña

export const saveTasks = (correo, contraseña) => {
  //console.log(correo,contraseña)
  addDoc(collection(db, 'iniciarSesion'), {correo, contraseña})
}