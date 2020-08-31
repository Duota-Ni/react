import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA';

//1.安装插件
Vue.use(Vuex)

const state = {
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
}

//2.创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
    modules: {
      a:moduleA
    }
  })

export default store
