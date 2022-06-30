import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQrEiNckZNCd63Q5iNISKvJlPjpX7rY4s",
  authDomain: "ecommerce-site-9c387.firebaseapp.com",
  projectId: "ecommerce-site-9c387",
  storageBucket: "ecommerce-site-9c387.appspot.com",
  messagingSenderId: "215251543724",
  appId: "1:215251543724:web:3849e3222c37df5934e109"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth()
