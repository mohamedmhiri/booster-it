<template>
  <div id="app">
    <DataList />
  </div>
</template>

<script>
import DataList from './components/DataList'

export default {
  name: 'App',
  data() {
    return {
      userList: []
    }
  },
  beforeMount() {
    this.userList = ["Anne", "Clément", "Massi", "Raphael", "Nicolas", "Mathhieu"];
  },
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
