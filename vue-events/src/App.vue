<template>
  <div id="app">
    <!--<HelloWorld/> -->
    <!-- <the-hero></the-hero> -->
    <h1
      :class="headerColor"
      @mouseover="mouseOverText" 
      @mouseleave="mouseLeaveText"
      @click="clickText"
    >
      Tour
    </h1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import TheHero from './components/TheHero.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHero
  },
  data() {
    return {
      headerColor: "black"
    }
  },
  methods: {
    mouseOverText() {
      this.headerColor = "grey"
    },
    mouseLeaveText() {
      this.headerColor = "black"
    },
    clickText() {
      this.headerColor = "green";
    }
  }
}
</script>

<style>
.black {
  color: black;
}

.grey {
  color: grey;
}

.green {
  color: green;
}
</style>
