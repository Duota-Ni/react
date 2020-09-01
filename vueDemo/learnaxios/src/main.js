import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios({
//   // url:'http://httpbin.org/',
//   //url:'http://123.207.32.32:8000/home/data?type=pop&page=1'
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get' //get为默认，可不写
// }).then(res => {
//   console.log(res);
// })

// axios({
//   //url:'http://123.207.32.32:8000/home/data?type=pop&page=1',
//   url:'http://123.207.32.32:8000/home/data',
//   //专门针对get请求的参数拼接
//   params:{
//     type:'pop',
//     page:1
//   },
//   method:'get' //get为默认，可不写
// }).then(res => {
//   console.log(res);
// })

//使用全局的axios和对应的配置进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// //2.axios发送并发请求
// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url:'/home/data',
//   //专门针对get请求的参数拼接
//   params:{
//     type:'sell',
//     page:5
//   }
// })])
// .then(
//   axios.spread((res1,res2) => {
//     console.log(res1);
//     console.log(res2);
//   })
// )

//创建对应的axios实例
// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })

// instance1({
//   url:'home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   console.log(res);
// })

// const instance2 = axios.create({
//   baseURL:'http://111.222.32.32:8000',
//   timeout:5000
// })

//5.封装request模块
import {request} from './network/request';

request({
  url:'/home/multidata'
})
.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
})

// request({
//   url:'/home/multidata'
// },res => {
//   console.log(res);
// },err => {
//   console.log(err);
// })

// request({
//   baseConfig:{

//   },
//   success:function(res){

//   },
//   failure:function(err){

//   }
// })