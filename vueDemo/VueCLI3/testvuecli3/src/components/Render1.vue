
<script>
export default {
  name: "Render1",
  //这里使用render函数
  //相当于在上面写
// <template>
//   <h1>杨洋真帅！！！</h1>
// </template>
  render(createElemnet){
    return createElemnet('h1',{},'杨洋真帅！！！')
  }
};
</script>

<style>
</style>