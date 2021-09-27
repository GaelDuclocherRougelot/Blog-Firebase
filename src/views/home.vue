<template>
  <div class="home">
    <div class="title">
      <h1>Le journal de Gaël</h1>
    <p>
      Je partage mes connaissances et ma passion pour le développement et la
      tech.
    </p>
    </div>
    
    <div class="section_articles">
      <!-- <div class="tri">

      </div> -->
      <router-link to="/article1" class="article link">
        <img src="../assets/dev-web.jpg" alt="image code html" />
        <div class="desc">
          <h2 class="link">Comment débuter dans le développement web</h2>
          <p id="date">24/09/2021</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Quicksand:wght@100;200;300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap");
.home {
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-top: 60px;
}
h1 {
  font-family: "Abril Fatface", cursive;
  font-weight: 100;
  font-size: 5em;
  margin-top: 60px;
  margin-left: 15px;
  margin-right: 15px;
}
p {
  margin-top: 20px;
  font-family: "Quicksand", sans-serif;
  font-size: 17px;
  margin-left: 15px;
  margin-right: 15px;
}

.section_articles {
  width: 100%;
  height: 80vh;
  display: flex;
  /* align-items: center; */
}

.article {
  width: clamp(300px, 100vw, 20%);
  height: 450px;
  margin: 80px 40px 0px 35px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 1px 20px 1px rgba(0, 0, 0, 0.432);
  transition: all 0.3s ease;
}





.desc {
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
}

img {
  width: clamp(520px, 100vw, 30%);
  object-fit: cover;
}

.article:hover {
  transition: all 0.3s ease;
  transform: scale(1.05);
}

.link {
  text-decoration: none;
  color: rgb(0, 0, 0);
}

h2 {
  font-size: 30px;
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-family: "Quicksand", sans-serif;
  font-weight: 200;
  padding: 25px;
}

.tri{
  width: 100%;
  height: 60px;
  margin-top: 80px;
  background: whitesmoke;
}

#date{
  margin: 0;
  margin-left: 25px;
}

@media  (max-width:1252px){
  .article{
    height: 520px;
  }
}
@media (max-width:650px) {
  .section_articles{
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
  }
  h2{
    font-size: 25px
  }
  
}
@media (max-width:450px) {
  .article{
    width: 200px;
    height: 380px;
  }
  h2{
    font-size: 20px
  }
  img{
    width: 350px;
  }
  #date{
    font-size: 15px;
  }
  
}
</style>
