<template>
  <div>
    <h1 @mouseover="mouseover" @mouseleave="mouseleave">{{ msg }}</h1>
    <button @click="onClick">clickMe</button>
    <input type="text" v-on:keydown="keydown">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {

  },
  methods: {
    onClick() {
      console.log("clicked");
    },
    mouseover() {
      this.msg = "Mouse Over";
    },
    mouseleave() {
      this.msg = "Mouse leave";
    },
    keydown(event) {
      if (event.keyCode === 13) {
        console.log('Enter a été pressé !');
      }
    }
  }
}
</script>
