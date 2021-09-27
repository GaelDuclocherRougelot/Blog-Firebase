<template >
  <div class="container">
    <div class="group">
      <div class="form-group">
        <form>
      <h1>Réinitialiser le mot de passe</h1>
          <div>
            <input type="email" placeholder="Email" v-model="email" required />
          </div>
          <button @click="resetPassword"><strong>Réinitialiser</strong></button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue"
export default {
  name: "reset",
  components: {
    Header
  },
  data() {
    return {
      email: "",
    };
  },
};
</script>
<script setup>
import { ref } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router";
const router = useRouter();

const email = ref("");

function resetPassword(){
  firebase.auth().sendPasswordResetEmail(email.value)
  .then(() => {
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}


</script>
<style scoped>
.container {
  width: 100%;
  text-align: center;
  color: rgba(48, 48, 48, 0.966);
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-group {
  width: 100%;
  text-align: center;
}

input {
  border: none;
  padding: 10px;
  width: 30%;
  min-width: 300px;
  margin-top: 20px;
  border-radius: 3px;
  font-size: 20px;
  border: 1px solid rgba(0, 0, 0, 0.377);
}

button {
  padding: 15px;
  border: none;
  margin-top: 20px;
  min-width: 300px;
  background-color: #50a3b9;
  color: #fff;
  border-radius: 25px;
  transition: all 0.3s;
  width: 30%;
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