<template>
  <div v-if="isLogin" class="header-bar">
    <div class="image-logo">
      <img src="./assets/logo.png" alt="logo" width="50" height="50" />
    </div>

    <nav class="nav-bar">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/blog">Blog</router-link>
    </nav>

    <button @click="handleLogout">Logout</button>
  </div>
  <router-view />
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("getListBlog");
  },
  computed: {
    ...mapState(["isLogin"]),
  },
  methods: {
    handleLogout() {
      this.$store.commit("getLogin", false);
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.header-bar {
  border-bottom: 1px solid;
  align-items: center;
  display: flex;
}

.nav-bar {
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 90%;
}
</style>
