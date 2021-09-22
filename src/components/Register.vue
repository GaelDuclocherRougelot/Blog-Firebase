<template lang="">
  <div class="container ">
    <div class="group">
      <h1>S'inscrire</h1>
    <div class="form-group ">

    <form @submit.prevent="register">
      <div>
        <input type="text" placeholder="Pseudo" v-model="nickname" required>
      </div>
      <div>
        <input type="email" placeholder="Email" v-model="email" required>
      </div>
      <div>
        <input type="password" placeholder="Mot de passe" v-model="password" required>
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
import { ref, defineProps } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router"; // import router
const email = ref("");
const password = ref("");
const nickname = ref("");
const router = useRouter(); // get a reference to our vue router
  const myProps = defineProps({
    closeMenu: Function,
  });
const register = () => {
  firebase
    .auth() // get the auth api
    .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
    .then((data) => {
      console.log("Successfully registered!" + data.user);
      myProps.closeMenu();
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({
          email: email.value,
          nickname: nickname.value,
        });
        nickname.value = "";
        email.value = "";
        password.value = "";
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
  text-align: center;
  color: rgba(48, 48, 48, 0.966);
  margin-top: 30px;
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
  background-color: #50a3b9;
  color: #fff;
  border-radius: 25px;
  transition: all 0.3s;
  width: 80%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  cursor: pointer;
}

button:hover {
  background-color: #54aec7;
}

h1 {
  font-size: 25px;
}
</style>