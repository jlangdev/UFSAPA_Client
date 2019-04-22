<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="red lighten-1" class="white--text">
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
              
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="username"
                  prepend-icon="person"
                  name="login"
                  label="Login"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red lighten-1"class="white--text" @click="login()">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>

export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      var instance = this;
      this.axios
        .post("/token-auth/", {
          username: this.username,
          password: this.password
        })
        .then(function(response) {
          localStorage.setItem('user',JSON.stringify(response.data.user_id));
          localStorage.setItem('profile', JSON.stringify(response.data.profile_id));
          localStorage.setItem('token',response.data.token);
          instance.$emit('loggedIn')
          instance.$router.push('events')
          location.reload()
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>
