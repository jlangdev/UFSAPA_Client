<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="orange">
              <v-toolbar-title>Register form</v-toolbar-title>
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
                  v-model="email"
                  prepend-icon="email"
                  name="email"
                  label="Email"
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
                <v-text-field
                  v-model="verifiedPassword"
                  prepend-icon="lock"
                  name="verifiedPassword"
                  label="Verify Password"
                  id="verifiedPassword"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              

              <v-btn color="orange" @click="register()">Register</v-btn>
            </v-card-actions>
          </v-card>
          <v-alert
                :value="alert"
                type="error"
                dismissible
                transition="scale-transition"
              >Passwords do not match.</v-alert>
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
      email: "",
      password: "",
      verifiedPassword: "",
      alert: false
    };
  },
  methods: {
    register: function() {
      if(this.password != this.verifiedPassword){
        this.alert = true;
        return;
      }
      var instance = this;
      this.axios
        .post("/register/", {
          username: instance.username,
          password: instance.password,
          email: instance.email
        })
        .then(function(response) {
          localStorage.setItem("user", JSON.stringify(response.data.user_id));
          localStorage.setItem(
            "profile",
            JSON.stringify(response.data.profile_id)
          );
          localStorage.setItem("token", response.data.token);
          instance.$router.push("events");
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
