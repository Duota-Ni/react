<template>
  <div>
    <h1>我是用户的相关信息</h1>
    <p>你好，我是用户{{userId}}</p>
    <p>{{$route.params.abc}}</p>
    <button @click="btnClick">按钮$router</button>
  </div>
</template>

<script>
export default {
  name:'User',
  computed:{
    userId(){
      //$route当前激活的路由信息对象。
      return this.$route.params.abc
    }
  },
  methods:{
    btnClick(){
      //所有组件都继承了Vue的原型
      console.log(this.$router);
      console.log(this.$route);
    }
  }
}
</script>

<style scoped>

</style>