<template lang="">
  <div class="header">
    <button v-if="loggedUser.length == 0" @click="menuActive = !menuActive" :class="{zindex : menuActive}" class="login-text">Se connecter</button>
    <button v-if="loggedUser.length !== 0" @click="disconnect" class="login-text">Déconnexion</button>
    <div class="menu" :class="{menu_activated : menuActive}">
      <div class="modal">
        <img @click="menuActive = false" class="cross" src="https://img.icons8.com/material-rounded/24/000000/delete-sign.png"/>
        <Login v-if="registerOption" :close="getUsername"/>
        <Register v-if="!registerOption"/>
        <p v-if="registerOption" class="p-social">ou utiliser un réseau social</p>
        <hr>
        <p v-if="registerOption" class="p-register">Pas encore membre? <span @click="registerOption = !registerOption">S'inscrire</span>.</p>
        <p v-if="!registerOption" class="p-register">Déja membre? <span @click="registerOption = !registerOption">Connexion</span>.</p>
      </div>
      <div class="right">
        
      </div>
    </div>
  </div>
</template>
<script>
import Login from "./Login.vue";
import Register from "./Register.vue";
import firebase from "firebase";

export default {
  name: "Header",
  components: { Login, Register },
  data() {
    return {
      menuActive: false,
      loggedUser: "",
      registerOption: false,
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
      const user = firebase.auth().currentUser;
      setTimeout(() => {
        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            var user = doc.data();
            return (this.loggedUser = user.nickname), (this.menuActive = false);
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
          });
      }, 1000);
        
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

h1 {
  color: white;
}
h2 {
  color: white;
}
.menu {
  width: 100%;
  height: 198vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.541);
  opacity: 0;
  z-index: 49;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu_activated {
  opacity: 1;
  transition: all 0.5s ease;
}

.modal {
  width: 500px;
  height: 500px;
  display: flex;
  margin: 0px 20px 0px 20px;
  flex-direction: column;
  background-color: #fff;
  margin-top: 820px;
  border-radius: 5px;
}

.login-text {
  position: absolute;
  right: 50px;
  font-size: 20px;
  cursor: pointer;
  z-index: 50;
  padding: 15px;
  border: none;
  background-color: #50a3b9;
  color: #fff;
  border-radius: 25px;
  transition: all 0.3s;
  margin-top: 20px;
}
.zindex {
  z-index: 48;
}

.login-text:hover {
  background-color: #54aec7;
  transition: all 0.3s;
}

.p-social {
  text-align: center;
  color: grey;
  margin-top: 30px;
}

hr {
  margin-top: 20px;
  width: 90%;
  margin-left: 25px;
  border-color: rgba(128, 128, 128, 0.164);
}

.p-register {
  text-align: center;
  margin-top: 30px;
}

span {
  color: rgb(0, 204, 255);
  cursor: pointer;
}

.cross {
  position: absolute;
  margin-top: 15px;
  margin-left: 450px;
  cursor: pointer;
  font-size: 20px;
}
</style>