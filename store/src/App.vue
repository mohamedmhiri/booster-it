<template>
  <div id="app">
    <the-logos></the-logos>
    <the-theme-button></the-theme-button>
    <the-theme-svg></the-theme-svg>
    <the-navbar></the-navbar>
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from './components/TheFooter.vue';
import TheLogos from './components/TheLogos.vue';
import TheNavbar from './components/TheNavbar.vue';
import Home from './views/Home.vue';
import TheThemeButton from './components/TheThemeButton.vue';
import TheThemeSvg from './components/TheThemeSvg.vue';

export default {
  name: 'App',
  components: {
    TheFooter,
    TheLogos,
    Home,
    TheNavbar,
    TheThemeButton,
    TheThemeSvg,
  },
  mounted() {
    console.log(this.$route);
  },
  updated() {
    console.log(this.$route);
  },
}
</script>

<style>
</style>
