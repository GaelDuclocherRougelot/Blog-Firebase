<template lang="">
  <div class="header">
    <nav>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/register" class="link">Register</router-link>
      <router-link to="/login" class="link">Login</router-link>
    </nav>
    <div class="hamburger"></div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap');
  .header {
    width: 100%;
    height: 80px;
    position: sticky;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
  }
  nav{
    position: relative;
  }
  .link{
    margin: 10px;
    font-size: 25px;
    text-decoration: none;
    color: black;
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    padding: 25px;
  }
  .router-link-active{
    background-color: #96bafe;
    height: 100%;
    color: white;
  }
  .hamburger{
    width: 30px;
    height: 30px;
  }
</style>