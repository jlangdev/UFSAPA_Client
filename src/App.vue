<template>
  <v-app id="app">
    <NavBar></NavBar>
    <v-content id = "test">
    <v-container >
    <router-view @loggedIn="handleLogin"/>
    </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  },
  methods:{
    handleLogin: function(){
      console.log('logged in')
    }
  }
}
</script>

<style>
#app {
  font-family: Nunito,'Avenir', Helvetica, Arial,  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
Footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}
#test{
  background-color: #fffaf0;
}


</style>
