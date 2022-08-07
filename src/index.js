import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAcCJtIazsul_4u82bwHnqvziJZDxDMEeU",
    authDomain: "tecnotienda-d5f10.firebaseapp.com",
    projectId: "tecnotienda-d5f10",
    storageBucket: "tecnotienda-d5f10.appspot.com",
    messagingSenderId: "239823249030",
    appId: "1:239823249030:web:7559783447c18eef9abb07"
  };

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(    
    <App />
);

