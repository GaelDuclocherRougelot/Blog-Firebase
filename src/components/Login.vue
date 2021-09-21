<template lang="">
  <div class="container ">
    <div class="group">
      <h1>Se connecter</h1>
    <div class="form-group ">

    <form @submit.prevent="login">
      <div>
        <input type="text" placeholder="Email" v-model="email">
      </div>
      <div>
        <input type="password" placeholder="Mot de passe" v-model="password">
      </div>
    <button type="submit"><strong>Se connecter</strong></button>
    <p v-if="errMsg"> {{ errMsg }} </p>
    </form>
  </div>
  </div>
    </div>
</template>
<script>

export default {
  name: "Login",
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
      email.value = ""
      password.value = ""
      router.push("/"); // redirect to the feed or account page
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
<style scoped>
.container {
  width: 100%;
  margin-top: 80vh;
  text-align: center;
  color: #fff;
}

.form-group {
  width: 100%;
  text-align: center;
}

input {
  border: none;
  padding: 15px;
  width: 400px;
  min-width: 300px;
  margin-top: 20px;
  border-radius: 3px;
  font-size: 20px;
}

button {
  padding: 15px;
  border: none;
  margin-top: 20px;
  background-color: rgba(31, 206, 25, 0.808);
  color: #fff;
  border-radius: 3px;
  transition: all 0.3s
}

button:hover {
  background-color: rgb(31, 206, 25)
}
</style>