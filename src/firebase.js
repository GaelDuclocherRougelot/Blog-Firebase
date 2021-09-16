import firebase from "firebase/app"
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBYdj2x9a4iK5ULooektSr4LkQhhRZ4S_E",
  authDomain: "fir-blog-d92ac.firebaseapp.com",
  projectId: "fir-blog-d92ac",
  storageBucket: "fir-blog-d92ac.appspot.com",
  messagingSenderId: "726450759001",
  appId: "1:726450759001:web:83902c9a20cb0988669848",
  measurementId: "G-WGXRTXMJH4"
};


let app = null;
  if(!firebase.apps.length){
    app = firebase.initializeApp(firebaseConfig);
  }

  
  export default firebase;