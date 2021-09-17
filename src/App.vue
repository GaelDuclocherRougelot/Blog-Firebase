<template>
  <div class="w-full h-screen">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default{
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  #app{
    width: 100%;
    height: 100vh;
  }
</style>
