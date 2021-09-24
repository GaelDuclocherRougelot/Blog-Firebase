<template >
  <div class="container">
    <div class="group">
      <h1>Réinitialiser le mot de passe</h1>
      <div class="form-group">
        <form @submit.prevent="reset">
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
import firebase from "firebase";
export default {
  name: "reset",
  data() {
    return {
      email: "",
    };
  },
};
</script>
<style scoped>
.group {
  position: relative;
  z-index: 49;
}
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
  width: 30%;
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