<template lang="">
  <div class="container ">
    <div class="group">
      <h1>Connexion</h1>
    <div class="form-group ">

    <form @submit.prevent="login">
      <div>
        <input type="text" placeholder="E-mail" v-model="email" required>
      </div>
      <div>
        <input type="password" placeholder="Mot de passe" v-model="password" required>
      </div>
    <button type="submit" @click="close"><strong>Se connecter</strong></button>
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
import Vuecookies from "vue-cookies"

const myProps = defineProps({
    closeMenu: Function,
  });

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
      myProps.closeMenu();
      email.value = ""
      password.value = ""
      router.push("/"); // redirect to the feed or account page
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
            errMsg.value = 'E-mail invalide'
            break
        case 'auth/user-not-found':
            errMsg.value = "Aucun compte n'a été trouvé avec cet email"
            break
        case 'auth/wrong-password':
            errMsg.value = 'Mot de passe incorrect'
            break  
        default:
            errMsg.value = "l'Email ou le Mot de passe est incorrect"
            break
      }});
};
</script>
<style scoped>
.container {
  position: relative;
  width: 100%;
  text-align: center;
  color: rgba(48, 48, 48, 0.966);
  margin-top: 30px;
  z-index: 55;
}

.form-group {
  width: 100%;
  text-align: center;
}

input {
  border: none;
  padding: 10px;
  width: 80%;
  /* min-width: 300px; */
  margin-top: 20px;
  border-radius: 3px;
  font-size: 20px;
  border: 1px solid rgba(0, 0, 0, 0.377);
}

button {
  padding: 15px;
  border: none;
  margin-top: 20px;
  background-color: #50A3B9;
  color: #fff;
  border-radius: 25px;
  transition: all 0.3s;
  width: 80%;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size:18px;
  cursor: pointer;
}

button:hover {
  background-color: #54aec7;
}

h1{
  font-size: 25px;
}
</style>