// Object.defineProperty()封装
// 并检测Object.defineProperty对对象的变化侦测
function defineReactive (data, key, val) {
  Object.defineProperty (data,key,{
    enumerable:true,
    configurable:true,
    get () {
      console.log("getting...")
      return val
    },
    set (newVal) {
      console.log(`setting [.${key}] to ${newVal}`)
      if (val === newVal) {
        return
      }
      val = newVal
    }
  })
}

var base = {
  name: "kevin",
  age: 23
}

defineReactive(base, "name", "123") //定义变化侦测
let name = base.name //get
// console.log("after name = " + name)
base.name = "witty" //set

console.log("finish....")