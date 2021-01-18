
<script>
export default {
name:'Render3',
data(){
  return{
    people:['杨洋','茜茜','索隆']
  }
},
props:{
  tag:String
},
render(createElement){
  return createElement(this.tag,{},this.people.map(name => createElement('li',{attrs:{class:'classname'},on:{
    click:()=>{
      console.log('li click');
    }
  }},`${name}`)))
}
}
</script>

<style>

</style>