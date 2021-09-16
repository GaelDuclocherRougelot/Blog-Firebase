<template lang="">
  <div class="container ">
    <div class="group">
      <h1>Sign-in</h1>
    <div class="form-group ">

    <form @submit.prevent="login">
      <div>
        <input type="text" placeholder="Email" v-model="email">
      </div>
      <div>
        <input type="password" placeholder="Password" v-model="password">
      </div>
    <button type="submit"><strong>Sign in</strong></button>
    <p v-if="errMsg"> {{ errMsg }} </p>
    </form>
  </div>
  </div>
    </div>
</template>
<script>

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: "",
    };
  },
};
</script>

<script setup>
import { ref } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router"; // import router

const email = ref("");
const password = ref("");
const router = useRouter(); // get a reference to our vue router
const errMsg = ref() // ERROR MESSAGE

const login = () => {
  firebase
    .auth() // get the auth api
    .signInWithEmailAndPassword(email.value, password.value) // need .value because ref()
    .then((data) => {
      console.log("Successfully logged in!");
      router.push("/account"); // redirect to the feed or account page
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
            errMsg.value = 'Invalid email'
            break
        case 'auth/user-not-found':
            errMsg.value = 'No account with that email was found'
            break
        case 'auth/wrong-password':
            errMsg.value = 'Incorrect password'
            break  
        default:
            errMsg.value = 'Email or password was incorrect'
            break
      }});
};
</script>
<style lang="">
</style>