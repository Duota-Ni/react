<template>
  <div id="app">
    <div>{{result}}</div>
    <hr/>

    <hello-world/>
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components:{
    HelloWorld
  },
  data(){
    return {
      result:''
    }
  },
  created(){
    axios({
      url:'http://123.207.32.32:8000/home/data'
    }).then(res => {
      // console.log(res);
      this.result = res;
    })
  }
}
</script>

<style>

</style>
