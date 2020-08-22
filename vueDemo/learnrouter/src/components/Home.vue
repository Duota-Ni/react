<template>
  <div>
    <h1>我是首页</h1>
    <p>我是关于首页,cccccc</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/messages">消息</router-link>
    
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      messages:'Hello!',
      path:'/home/news'
    }
  },
  created(){
    console.log('home created');
  },
  destroyed(){
    console.log('home destroyed');
  },
  //在进入活跃时push路径
  //这两个函数，只有该组件被保持了状态使用了keep-alive才是有效的
  activated(){
    // console.log('home activated');
    this.$router.push(this.path);
  },
  // deactivated(){
  //   console.log(this.$route.path); 
  //   console.log('home deactivated');
  // },
  beforeRouteLeave(to,from,next){
    console.log(this.$route.path);
    this.path = this.$route.path;
    next()
  }
};
</script>

<style scoped>
</style>