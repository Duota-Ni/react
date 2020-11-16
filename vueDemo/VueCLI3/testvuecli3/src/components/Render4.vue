
<script>
import Test from './Test'
export default {
name:'Render4',

render(createElement){
  return createElement(
    Test,
    {
      props:{
        msg:'刘亦菲真好看！！'
      }
    }
  )
}
}
</script>

<style>

</style>