<template>
  <div id="app">
    <div id="nav">
        <strong-layout></strong-layout>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component,Vue } from 'vue-property-decorator';
import strongLayout from 'components/strong-layout.vue';
@Component({
    components: {
        strongLayout
    }
})
export default class HelloWorld extends Vue {
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body,html {
    margin: 0;
    padding: 0;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
