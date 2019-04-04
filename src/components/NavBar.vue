<template>
  <v-toolbar app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>UFSAPA</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
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
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String
  }
};
</script>

<style>
</style>
