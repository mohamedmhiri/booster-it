<template>
  <div id="app">
    <form>
      <label for="email"></label>
      <input type="text" name="email" id="email" v-model="user.email">
      <label for="password"></label>
      <input type="password" name="password" id="password" v-model="user.password">
      <button type="button" @click="login">Login</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch("setUser", this.user);
    }
  }
}
</script>

<style>
</style>
