// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// const cpn = {
//   template: '<div>{{message}}</div>',
//   data () {
//     return {
//       message: '我是组件message'
//     }
//   }
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'

  // render: h => h(App)等于
  // h = createElement
  // 1.普通用法：createElement('标签'，{标签的属性}，[''])
  // 例如：
  // render: createElement => createElement('h2',
  //   { class: 'box' },
  //   ['helo world', createElement('button', ['按钮'])])

  // 2.传入组件对象
  // render: createElement => createElement(cpn)
  render: createElement => createElement(App)
})
