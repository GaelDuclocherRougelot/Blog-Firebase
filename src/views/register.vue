<template lang="">
  <div class="container ">
    <div class="group">
      <h1>Sign up</h1>
    <div class="form-group ">

    <form @submit.prevent="register">
      <div>
        <input type="text" placeholder="Email" v-model="email">
      </div>
      <div>
        <input type="password" placeholder="Password" v-model="password">
      </div>
    <button type="submit"><strong>Sign up</strong></button>
    </form>
  </div>
  </div>
    </div>
</template>
<script>
// import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: "",
    };
  },

  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user);
          this.$router.push("account");
        })
        .catch((error) => {
          this.errors = error;
        });
    },
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
const register = () => {
  firebase
    .auth() // get the auth api
    .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
    .then((data) => {
      console.log("Successfully registered!");
      router.push("/account"); // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>
<style lang="">
</style>