<template>
  <div id="app">
  <!-- <router-link to="/home" tag="button" replace>首页</router-link>
  <router-link to="/about" tag="button" replace>关于</router-link> -->
  <button @click="toHome">首页</button>
  <button @click="toAbout">关于</button>
  <!-- <router-link to="/home" >首页</router-link>
  <router-link to="/about" >关于</router-link> -->
  <!-- <router-link :to="'/user/'+userId" >用户</router-link>
  <router-link :to="{path:'/profile',query:{name:'zoro',age:21,height:1.81}}" >档案</router-link> -->
  <button @click="toUser">用户</button>
  <button @click="toProfile">档案</button>
  <keep-alive exclude="Profile,User">
    <router-view/>
  </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'crystal'
    }
  },
  methods:{
    toHome(){
      //通过代码方式修改路由 vue-router
      this.$router.push('/home')
      // this.$router.replace('/home');
      // console.log("gotohome");
    },
    toAbout(){
      //通过代码方式修改路由 vue-router
      this.$router.push('/about')
      // this.$router.replace('/about')
      // console.log("gotoabout");
    },
    toUser(){
      this.$router.push('/user/' + this.userId)
    },
    toProfile(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'yangyang',
          age:28,
          height:1.8
        }
      })
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
  color: #f00;
}
</style>
