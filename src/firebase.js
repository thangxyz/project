import { getApp,getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyApyuTadbUWqpUNPO0sA2vx6h8O0SzFsSk",
  authDomain: "restaurant-cadda.firebaseapp.com",
  databaseURL: "https://restaurant-cadda-default-rtdb.firebaseio.com",
  projectId: "restaurant-cadda",
  storageBucket: "restaurant-cadda.appspot.com",
  messagingSenderId: "367965447423",
  appId: "1:367965447423:web:9f47cd42b9c975ce8e98ca"


  };
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  export { app, firestore, storage };