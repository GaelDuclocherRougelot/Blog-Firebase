<template >
  <div class="container ">
    <div class="group">
      <h1>Connexion</h1>
    <div class="form-group ">

    <form @submit.prevent="reset">
      <div>
        <input type="text" placeholder="Email" v-model="email" required>
      </div>
    <button type="submit" @click="close"><strong>Réinitialiser</strong></button>
    <p v-if="errMsg"> {{ errMsg }} </p>
    </form>
  </div>
  </div>
    </div>
</template>
<script>
export default {
  name: "Reset"
}
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