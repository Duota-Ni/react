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
};
</script>

<style scoped>
</style>