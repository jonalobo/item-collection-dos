import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcCJtIazsul_4u82bwHnqvziJZDxDMEeU",
  authDomain: "tecnotienda-d5f10.firebaseapp.com",
  projectId: "tecnotienda-d5f10",
  storageBucket: "tecnotienda-d5f10.appspot.com",
  messagingSenderId: "239823249030",
  appId: "1:239823249030:web:7559783447c18eef9abb07",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/*Un solo documento de Firebase*/

export const getDetailItem = (id) => {
  const docRef = doc(db, "items", id); //referencia a el documento
  return getDoc(docRef);
};

/*Todos los doc de una coleccion*/

export const getItems = () => {
  const colRef = collection(db, "items"); // referencia a la collection
  const q = query(colRef);
  return getDocs(q);
};

/*Datos filtrados de una coleccion*/

export const getItemsFiltered = (categ) => {
  const colRef = query(collection(db, "items")); // referencia a la collection
  const q = query(colRef, where("categoryId", "==", categ));
  return getDocs(q);
};

/*Orden de compra especifica*/

export const getOrderById = (id) => {
  const docRef = doc(db, "orders", id);
  return getDoc(docRef);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
