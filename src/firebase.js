import {initializeApp} from 'firebase';

const app=initializeApp({
    apiKey: "AIzaSyBBlIbFahLZUQwkFOZXw0v34C8L96Sje9w",
    authDomain: "task-a7708.firebaseapp.com",
    databaseURL: "https://task-a7708.firebaseio.com",
    projectId: "task-a7708",
    storageBucket: "task-a7708.appspot.com",
    messagingSenderId: "1025271576255",
    appId: "1:1025271576255:web:0651870242d9a59397380a"
  });

export const db=app.database();
export const up=db.ref()
export const namesRef=db.ref('names')