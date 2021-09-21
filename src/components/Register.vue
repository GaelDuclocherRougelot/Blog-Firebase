<template lang="">
  <div class="container ">
    <div class="group">
      <h1>S'inscrire</h1>
    <div class="form-group ">

    <form @submit.prevent="register">
      <div>
        <input type="text" placeholder="Pseudo" v-model="nickname">
      </div>
      <div>
        <input type="email" placeholder="Email" v-model="email">
      </div>
      <div>
        <input type="password" placeholder="Mot de passe" v-model="password">
      </div>
    <button type="submit"><strong>S'inscrire</strong></button>
    </form>
  </div>
  </div>
    </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      nickname: "",
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
const nickname = ref("");
const router = useRouter(); // get a reference to our vue router
const register = () => {
  firebase
    .auth() // get the auth api
    .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
    .then((data) => {
      console.log("Successfully registered!");
      email.value = ""
      password.value = ""
      nickname.value = ""
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({
          nickname: nickname.value
        });

      router.push("/"); // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>
<style scoped>
.container {
  width: 100%;
  margin-top: 85vh;
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
  transition: all 0.3s;
}

button:hover {
  background-color: rgb(31, 206, 25)
}
</style>