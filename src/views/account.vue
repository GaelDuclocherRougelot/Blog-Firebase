<template lang="">
  <div>
    <h1>Hi !</h1>
    <h2>{{currentUser}}</h2>
    <button @click="disconnect">sign-out</button>
    <input type="text" v-model="this.newUsername">
    <button @click="updateUsername">Change username</button>
  </div>
</template>
<script>
import firebase from 'firebase'
import { ref } from 'vue'
export default {
  name: "account",
  data() {
    return {
      newUsername: '',
      currentUser: '',
    }
  },
  methods: {
  disconnect() {
    firebase.auth().signOut().then(() => {
  console.log('Sign-out successful.');
  this.currentUser = ''
  }).catch((error) => {
  // An error happened.
  });
},
  getUsername(){
  firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid)
  .get()
  .then((doc) => {
    var user = doc.data();
    console.log(user);
    return this.currentUser = user.nickname
    
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
  }
},
mounted() {
  this.getUsername();
},
}
</script>
<style lang="">
</style>