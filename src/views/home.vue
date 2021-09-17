<template>
  <div class="home">
    <div class="section1">
      <h1>Le journal de Gaël</h1>
      <p>Je partage mes connaissances et ma passion pour le développement et la tech.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Quicksand:wght@100;200;300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap');
  .section1 {
    width: 100%;
    height: 40vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h1{
    font-family: 'Abril Fatface', cursive;
    font-weight: 100;
    font-size: 5em;
    margin-top: 50px;
  }
  p{
    margin-top: 20px;
    font-family: 'Quicksand', sans-serif;
    font-size: 17px;
  }
</style>
