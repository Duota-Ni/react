import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations-types';

//1.安装插件
Vue.use(Vuex)

const moudleA = {
  state:{
    name:'zhangshan'
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
  actions:{
    aUpdateName(context){
      console.log(context);
      setTimeout(() => {
        context.commit('updateName','wangwu')
      },1000)
    }
  },
  getters:{
    fullname(state) {
      return state.name + '1111'
    },
    fullname2(state,getters) {
      return getters.fullname + '2222'
    },
    fullname3(state,getters,rootState) {
      return getters.fullname2 + rootState.counter
    }
  }
}

//2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 10000,
    students: [
      { id: 110, name: 'yang', age: 28 },
      { id: 111, name: 'cc', age: 32 },
      { id: 112, name: 'zoro', age: 19 },
      { id: 113, name: 'luffy', age: 17 }
    ],
    info:{
      name:'xiaonai',
      age:22,
      height:1.8
    }
  },
  mutations: {
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
  },
  actions: {
    //context:上下文
    // aUpdateInfola(context,payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfola')
    //     console.log(payload.message);
    //     payload.success();
    //   },1000)      
    // }

    aUpdateInfola(context,payload) {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('updateInfola')
          console.log(payload);

          resolve('111111')
        },1000) 
      })     
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20 )
    },
    more20stuLength(state,getters){
      return getters.more20stu.length
    },
    moreAgestu(state){
      //要返回函数
      return function(age) {
        return state.students.filter(s => s.age > age )
      }
    }
    },
    modules: {
      a:moudleA
    }
  })

export default store
