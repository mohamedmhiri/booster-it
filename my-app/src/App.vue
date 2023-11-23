<template>
  <div id="app">
    <input type="text" name="" id=""><input type="text" name="" id=""><input type="text" name="" id="">
    <p>{{ userName }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        date: ""
      },
      sumValue: 0
    }
  },
  computed: {
    userName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
    age() {
      return new Date(this.user.date);
    }
  },
  methods: {
    sum(num1, num2) {
      this.sumValue = num1 + num2;
    }
  }
}
</script>

<style>
</style>
