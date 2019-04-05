<template>
  <v-app id="app">
    <NavBar></NavBar>
    <v-content>
    <v-container>
    <router-view/>
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
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
Footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}


</style>
