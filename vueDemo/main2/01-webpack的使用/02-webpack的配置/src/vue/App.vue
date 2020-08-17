<template>
  <div>
    <h1 class="title">{{message}}</h1>
    <button @click="btnClick">按钮</button>
    <p>Power by {{name}}</p>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from './Cpn'
export default {
  name: "App",
  components:{
    Cpn
  },
  data() {
    return {
      message: "Hello Webpack, you are amazing!",
      name: "Duota Ni"
    }
  },
  methods: {
    btnClick() {
      console.log("btnClick");
    }
  }
}
</script>

<style scoped>
.title {
  color: green;
}
</style>