<template lang="">
  <div class="header">
    <router-link to="/"><span style="margin-left: 20px;font-size: 25px">MyLogo.</span></router-link>
    <button v-if="loggedUser == ''"  @click="menuActive = !menuActive" :class="{zindex : menuActive}" class="login-text">Se connecter</button>
    <button v-if="loggedUser !== ''" @click="disconnect" class="login-text">Déconnexion</button>

    <div class="menu" v-if="menuActive" :class="{menu_activated : menuActive}">
      
      <div class="modal">
        <img @click="menuActive = false" class="cross" src="https://img.icons8.com/material-rounded/24/000000/delete-sign.png"/>
        <Login v-if="registerOption" :closeMenu="getUsername" />
        <Register v-if="!registerOption" :closeMenu="getUsername" />
        <img v-if="svg" src="../assets/Pulse.svg" class="svg">
        <hr>
        <p v-if="registerOption" class="p-register">
          Pas encore membre ? 
          <span @click="registerOption = !registerOption">S'inscrire</span>.
        </p>
        <p v-if="!registerOption" class="p-register">
          Déja membre ? 
          <span @click="registerOption = !registerOption">Connexion</span>.
        </p>
        <p v-if="registerOption" class="p-register">
          Mot de passe oublié ? 
          <!-- <span @click="resetPassword = !resetPassword">Réinitialiser</span>. -->
          <router-link to="/reset" @click="menuActive = false">Réinitialiser</router-link>
        </p>
        
      </div>
    </div>
      <div v-if="loggedUser !== ''" :class="{playNotif : animationNotif}" class="notif">
        <p>Bienvenue, {{loggedUser}}</p>
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
      svg: false,
      animationNotif: false,
      resetPassword: false,
    };
  },
  methods: {
    disconnect() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Sign-out successful.");
          $cookies.set("user", "");
          this.loggedUser = "";
        })
        .catch((error) => {
          // An error happened.
        });
    },
    getUsername() {
      this.svg = true;
      setTimeout(() => {
        if (firebase.auth().currentUser) {
          firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((doc) => {
              var user = doc.data();
              return (
                (this.loggedUser = user.nickname),
                (this.menuActive = false),
                (this.setCookie()),
                (this.playAnimation()),
                (this.svg = false),
                (user)
              );
            })
            .catch(function (error) {
              console.log("Error getting document:", error);
            });
        } else if (user) {
          this.getUsername(); //double call
        } else {
          console.log("Aucun utilisateur trouvé");
          this.svg = false;
        }
      }, 5000);
    },
    setCookie() {
      $cookies.set("user", this.loggedUser);
    },
    getCookie() {
      console.log($cookies.get("user"));
      this.loggedUser = $cookies.get("user");
    },
    playAnimation() {
      this.animationNotif = true;
      setTimeout(() => {
        this.animationNotif = false;
      }, 4000);
      return this.animationNotif;
    },
  },
  mounted() {
    if($cookies.get("user").value !== ''){
      this.getCookie();
    }else{
      console.log('No user in cookie');
    }
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap");
.header {
  width: 100%;
  height: 80px;
  position: fixed;
  display: flex;
  align-items: center;
  overflow-y: none;
  background-color: whitesmoke;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.432);

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
  z-index: 50;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu_activated {
  opacity: 1;
  transition: all 0.5s ease;
}

.login-text {
  position: absolute;
  right: 50px;
  font-size: 20px;
  cursor: pointer;
  z-index: 51;
  padding: 15px;
  border: none;
  background-color: #50a3b9;
  color: #fff;
  border-radius: 25px;
  transition: all 0.3s;
}
.zindex {
  z-index: 48;
}

.login-text:hover {
  background-color: #54aec7;
  transition: all 0.3s;
}

/* MODAL  */
.modal {
  position: relative;
  z-index: 51;
  width: 500px;
  display: flex;
  margin: 0px 20px 0px 20px;
  flex-direction: column;
  background-color: #fff;
  margin-top: 820px;
  border-radius: 5px;
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
  margin-bottom: 30px;
}

span {
  color: rgb(0, 204, 255);
  cursor: pointer;
}

.cross {
  position: relative;
  margin-top: 15px;
  margin-right: 20px;
  align-self: flex-end;
  cursor: pointer;
  width: 25px;
}

.svg {
  width: 100px;
  align-self: center;
}

.hideComponent{
  display: none;
}

/* Notification */

.notif {
  margin-top: 200px;
  position: absolute;
  right: 0;
  width: 250px;
  height: 60px;
  background-color: rgb(50, 156, 24);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px 0px 0px 25px;
  transform: translateX(+300px);
  transition: all 0.5s ease;
  animation: activeNotif 4s ease infinite;
  animation-play-state: paused;
}

.playNotif {
  animation-play-state: running;
}

.notif > p {
  color: #fff;
  font-size: 20px;
}

@keyframes activeNotif {
  0% {
    transform: translateX(+300px);
  }
  50% {
    transform: translateX(0px);
  }
  60% {
    transform: translateX(0px);
  }
  70% {
    transform: translateX(0px);
  }
  80% {
    transform: translateX(0px);
  }
  90% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(+300px);
  }
}

@media  (max-width:650px){
  .login-text{
    right: 25px;
    font-size: 15px;
  }
  .modal{
    margin-top: 600px;
  }
}
</style>