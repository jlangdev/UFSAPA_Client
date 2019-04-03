<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="https://bulma.io"
      >
        <img
          src="http://www.freelogovectors.net/wp-content/uploads/2018/08/uf-university-of-florida.png"
          width="50"
          height="28"
        >
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
    >
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link to="/events">Events</router-link>
        </a>

        <a class="navbar-item">
          <router-link to="/about">About</router-link>
        </a>
        <a class="navbar-item">
          <router-link to="/members">Members</router-link>
        </a>

        <a class="navbar-item">
          <router-link to="/members">Board Members</router-link>
        </a>

        <a class="navbar-item">
          <router-link to="/contact">Contact Us</router-link>
        </a>

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-info">
              <router-link to="/register" class="has-text-white	"><strong>Register</strong></router-link>
            </a>
            <a class="button is-light">
              <router-link to="/login" class="has-text-info"> <strong>Log in</strong></router-link>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
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
