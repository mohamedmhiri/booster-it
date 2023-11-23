<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li v-for="element in dataList">
        <a
          :href="element.url"
          target="_blank"
        >
          {{element.label}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import data from "./data/dataList.json";

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dataList: []
    }
  },
  beforeMount() {
    this.dataList = data;
    // this.dataList = [
    //   {url: "https://vuejs.org", label: "Core Docs"},
    //   {url: "https://forum.vuejs.org", label: "Forum"},
    //   {url: "https://chat.vuejs.org", label: "Community Chat"},
    //   {url: "https://twitter.com/vuejs", label: "Twitter"},
    //   {url: "http://vuejs-templates.github.io/webpack/", label: "Docs for This Template"},
    // ];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
