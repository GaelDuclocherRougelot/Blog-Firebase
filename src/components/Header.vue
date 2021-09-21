<template lang="">
  <div class="header">
    <div @click="menuActive = !menuActive" class="hamburger">
      <span class="line" :class="{line1 : menuActive}"></span>
      <span class="line" :class="{line2 : menuActive}"></span>
      <span class="line" :class="{line3 : menuActive}"></span>
    </div>
    <div class="menu" :class="{menu_activated : menuActive}">
      <div class="left">
        <Login />
    <!-- <button @click="disconnect">sign-out</button> -->
      </div>
      <div class="right">
        <Register />
      </div>
    </div>
  </div>
</template>
<script>
import Login from "./Login.vue";
import Register from "./Register.vue";
import firebase from "firebase";

export default {
  name : "Header",
  components: {Login, Register },
  data() {
    return {
      menuActive: false,
      newUsername: "",
      loggedUser: "",
    };
  },
  methods: {
    disconnect() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Sign-out successful.");
          this.loggedUser = "";
        })
        .catch((error) => {
          // An error happened.
        });
    },
    getUsername() {
      const user = firebase.auth().currentUser
      console.log(firebase.auth().currentUser.uid);
        firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          var user = doc.data();
          console.log(user.nickname);
          return (this.loggedUser = user.nickname);
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap");
.header {
  width: 100%;
  height: 80px;
  position: sticky;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow-y: none;
}
.link {
  margin: 10px;
  font-size: 60px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-family: "Quicksand", sans-serif;
  font-weight: 200;
  padding: 25px;
}
/* .router-link-active {
  background-color: #96bafe;
  color: white;
} */
.hamburger {
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  right: 100px;
  top: 50px;
  z-index: 50;
}

h1 {
  color: white;
}
h2{
  color: white;
}

.line {
  width: 40px;
  height: 2px;
  background-color: #000;
  margin-top: 8px;
  transition: all 1s ease;
  transition-delay: 0.2;
}
.menu {
  width: 100%;
  height: 192vh;
  position: absolute;
  background-color: rgb(22, 22, 22);
  transform: translateY(-195vh);
  z-index: 49;
  transition: all 1s ease;
  display: flex;
  align-items: center;
  overflow-y: hidden;
}
.left {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: #fff 1px solid;
}
.right {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu_activated {
  transform: translateY(0vh);
  transition: all 1s ease;
}
.line1 {
  transition: all 1s ease;
  background-color: rgb(255, 255, 255);
  transform: translateY(10px);
}
.line2 {
  transition: all 1s ease;
  background-color: #fff;
  opacity: 0;
}
.line3 {
  transition: all 1s ease;
  background-color: rgb(255, 255, 255);
  transform: translateY(-10px);
}



</style>