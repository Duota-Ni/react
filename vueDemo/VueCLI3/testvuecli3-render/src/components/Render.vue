<template>
  <h1>杨洋真帅！！！</h1>
</template>

<script>
export default {
  name: "Render",
  //这里使用render函数
  props:{
    tag:String
  },
  render(createElemnet){
    return createElemnet('h1',{},'杨洋真帅！！！')
  }
};
</script>

<style>
</style>