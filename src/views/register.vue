<template lang="">
  <div class="container ">
    <div class="group">
      <h1>Sign up</h1>
    <div class="form-group ">

    <form @submit.prevent="pressed">
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
import firebase from "firebase/app";
import 'firebase/auth'
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
          // this.$router.push("account");
        })
        .catch((error) => {
          this.errors = error;
        });
    },
  },
};
</script>
<style lang="">
</style>