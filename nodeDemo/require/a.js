console.log('a.js....')
// let a = 10
define(['b'],function(obj){
  console.log('b的对象',obj)
  return {
    name:'crystal',
    age:'20'
  }
})