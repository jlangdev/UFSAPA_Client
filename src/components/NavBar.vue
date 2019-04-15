<template>
  <v-toolbar app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class = "title">UFSAPA</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="isLoggedIn" flat>
        <router-link to="/events" tag="li">Events</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/members" tag="li">Members</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/board" tag="li">Board Members</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/about" tag="li">About</router-link>
      </v-btn>
      <v-btn v-if="isLoggedIn" flat>
        <router-link to="/profile" tag="li">My Profile</router-link>
      </v-btn>
      <v-btn v-if="isLoggedIn" @click='logOut()' flat>
        <router-link to="/login" tag="li">Log Out</router-link>
      </v-btn>
 


      <v-btn v-if="!isLoggedIn" flat>
        <router-link to="/about" tag="li">Login</router-link>
      </v-btn>
      <v-btn v-if="!isLoggedIn" flat>
        <router-link to="/about" tag="li">Register</router-link>
      </v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String
  },
  data(){
    return{
      isLoggedIn: false,
    }
  },
  methods:{
    logOut: function(){
      delete localStorage.user
      delete localStorage.profile
      delete localStorage.token
    }
  },
  mounted(){
    if(localStorage.token){
      this.isLoggedIn = true
    }
  }
};
</script>

<style>
.hidden-sm-and-down{
  font-family: Nunito;
  /*font-weight: bold;*/

}

.title{
  font-family: Nunito;
}
</style>
