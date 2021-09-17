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
export default {
  name: "account",
  data() {
    return {
      newUsername: '',
      currentUser: [],
    }
  },
  methods: {
  disconnect() {
      firebase.auth().signOut().then(() => {
   console.log('Sign-out successful.');
  }).catch((error) => {
  // An error happened.
  });
},
    updateUsername(){
  firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid)
  .get()
  .then(function(doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      return doc.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
  }
}
}
</script>
<style lang="">
</style>