<template>
  <div id="app">
    <img src="./assets/logo.png">
    <DataList />
  </div>
</template>

<script>
import DataList from './components/DataList'

export default {
  name: 'App',
  components: {
    DataList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
