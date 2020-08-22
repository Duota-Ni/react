<template>
  <div>
    <h1>我是profile</h1>
    <p>Profile lalallal</p>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.height}}</p>
  </div>
</template>

<script>
export default {
  name:'Profile',
   created(){
    console.log('Profile created');
  },
  destroyed(){
    console.log('Profile destroyed');
  },
}
</script>

<style scoped>

</style>