<template>
  <div class="home">
    <h1>Le journal de Gaël</h1>
    <p>
      Je partage mes connaissances et ma passion pour le développement et la
      tech.
    </p>
    <div class="section_articles">
      <router-link to="/article1" class="article link">
        <img src="../assets/dev-web.jpg" alt="image code html" />
        <div class="desc">
          <h2 class="link">Comment débuter dans le développement web</h2>
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
  align-items: center;
}
.section1 {
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
}
h1 {
  font-family: "Abril Fatface", cursive;
  font-weight: 100;
  font-size: 5em;
  margin-top: 15px;
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
  align-items: center;
}

.article {
  width: 500px;
  height: 400px;
  margin: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

.desc {
  z-index: 10;
  width: 100%;
  height: 150px;
  background-color: whitesmoke;
}

img {
  z-index: 9;
  width: 500px;
  object-fit: cover;
  transition: all 0.3s ease;
}

.link:hover > img {
  transition: all 0.3s ease;
  transform: scale(1.1);
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
</style>
