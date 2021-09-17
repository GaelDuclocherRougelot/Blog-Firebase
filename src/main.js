import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBYdj2x9a4iK5ULooektSr4LkQhhRZ4S_E",
  authDomain: "fir-blog-d92ac.firebaseapp.com",
  projectId: "fir-blog-d92ac",
  storageBucket: "fir-blog-d92ac.appspot.com",
  messagingSenderId: "726450759001",
  appId: "1:726450759001:web:83902c9a20cb0988669848",
  measurementId: "G-WGXRTXMJH4"
};


firebase.initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)

app.mount('#app')


