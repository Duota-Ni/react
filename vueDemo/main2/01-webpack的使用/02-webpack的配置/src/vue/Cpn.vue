<template>
  <div>
    <h2>我是cpn组件的标题</h2>
    <p>我是cpn组件的内容</p>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  message:'Cpn',
  data(){
    return {
      message:'cpn组件的message,杨洋和亦菲真好看！'
    }
  }
}
</script>