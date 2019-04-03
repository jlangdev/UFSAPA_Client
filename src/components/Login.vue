<template>
  <div class="columns is-mobile is-centered">
    <div class="column is-half">
      <section>
          <h1 class="title is-2">
            <b-icon
              icon="account"
              size="is-medium"
            >
            </b-icon>Login
          </h1>

          <b-field>
            <b-input
              placeholder="Email"
              type="email"
            ></b-input>
          </b-field>

          <b-field>
            <b-input
              type="password"
              placeholder="Password"
            >
            </b-input>
          </b-field>
          <div class="buttons are-medium">

            <a class="button is-primary">Login</a>
            <a class="button is-info">Register</a>
          </div>

      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String
  }
};
</script>

<style>
</style>
