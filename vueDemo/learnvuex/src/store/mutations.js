import {INCREMENT} from './mutations-types'

export default {
  //方法
  [INCREMENT](state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  addCountla(state,payload) {
    // console.log(payload);
    state.counter += payload.count
  },
  addStudentla(state,stu){
    state.students.push(stu)
  },
  updateInfola(state){
    //这些不是响应式的
    state.info.name = 'yexiu'
    // state.info['address'] = 'beijing'
    // delete state.info.age

    //响应式更改方法Vue.set
    // Vue.set(state.info,'address','beijing')
    // Vue.delete(state.info,'age')

    //异步!不要在Mutations里进行异步操作
    // setTimeout(() => state.info.name = 'yexiu',1000)

  }
}
