<template>
  <div id="app">
    <render></render>
    <render1></render1>
    <render2 tag="h1"></render2>
    <render3 tag="ul"></render3>
    <render4></render4>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Render from './components/Render.vue'
import Render1 from './components/Render1.vue'
import Render2 from './components/Render2.vue'
import Render3 from './components/Render3.vue'
import Render4 from './components/Render4.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Render,
    Render1,
    Render2,
    Render3,
    Render4
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
