# 关于Vue的笔记（针对本人的理解点和重难点）  

vue的数据绑定跟微信小程序有点像  
指令带有前缀 v-  
如：v-if v-for

## MVVM 
![MVVMpocture](images/notesImages/MVVM.png)
Model数据绑定到View,x响应式，将Model的改变实时反应到Vi额外中  
DOM监听，发生事件改变对应的Data
![MVVM2](images/notesImages/MVVM2.png)

## 虚拟DOM
案例为: [06登录案例](main/06-条件判断/04用户切换登录的案例.html)  
![vdom](images/notesImages/虚拟DOM-key.png)  
用key=" "作标识

## v-show  
![v-show](images/notesImages/v-show.png)

## 组件key的属性
![key](images/notesImages/组件key的属性.png)  
key一定要是**唯一性**的，不然没太大意义，不要绑定index,比如在插入的时候index会改变
比如在列表中插入一个元素  
[for添加key](main/07-循环遍历/03v-for添加key.html)
![数组中插入元素](images/notesImages/数组插入key.png)

## v-model原理
![v-model原理1](images/notesImages/v-model原理1.png)  
![v-model原理2](images/notesImages/v-model原理2.png)

## v-model修饰符
![v-model修饰符](images/notesImages/v-model修饰符.png)

## 组件化
![组件化](images/notesImages/组件化.png)
vue的组件化  
![vue组件化](images/notesImages/Vue组件化.png)
注册组件步骤
![注册组件](images/notesImages/注册组件.png)  

### 组件的data必须是函数
![组件数据](images/notesImages/组件数据.png)

### 父子组件间的通信  
**注意：Vue实例本身可以看作一个组件，并且是root组件，即顶层父组件**  
![父子组件通信](images/notesImages/父子组件间的通信.png)  
#### 父传子  
props可以是数组或者对象
组件props数据验证
![组件props数据验证](images/notesImages/组件props数据验证.png)  
#### 子传父  
![组件子传父](images/notesImages/组件子传父.png)  
![例子](images/notesImages/组件子传父例子.png)  

### 父子组件的访问  
![父子组件的访问](images/notesImages/父子组件的访问方式.png)

### 插槽slot
![插槽1](images/notesImages/插槽slot.png)  
![插槽2](images/notesImages/插槽slot2.png)  
编译作用域
![编译作用域](images/notesImages/编译作用域.png)
![作用域插槽](images/notesImages/作用域插槽.png)

## 模块化开发  
![js原始问题](images/notesImages/模块化-js原始问题.png)  
模块化-匿名函数解决冲突但不能导出
![模块化-匿名函数解决冲突但不能导出](images/notesImages/模块化-匿名函数解决冲突但不能导出.png)  
使用模块作为出口  
![使用模块作为出口](images/notesImages/模块化-使用模块作为出口.png)  
CommonJS(初步认识)  
![CommonJS](images/notesImages/模块化-CommonJS.png)

## Webpack
![是什么](images/notesImages/webpack-是什么.png)  
![模块化&打包](images/notesImages/webpack-前端模块化和打包概念.png)  
![与grunt&gulp对比](images/notesImages/webpack-与grunt&gulp对比.png)  
![与node&npm关系](images/notesImages/webpack-与node和npm的关系.png)  
### 实现步骤
![准备](images/notesImages/webpack-准备.png)  
![文件打包](images/notesImages/webpack-js文件打包.png)  
![入口和出口](images/notesImages/webpack-入口和出口.png)  
![package.json定义自启动](images/notesImages/webpack-package.json中定义启动.png) 
![安装](images/notesImages/webpack-安装.png)   
![局部安装](images/notesImages/webpack-局部安装.png)  
### loader  
#### css  
![loader](images/notesImages/webpack-loader.png)
#### less等
![less](images/notesImages/webpack-less等其他文件.png)

### Webpack Vue
![webpack vue1](images/notesImages/webpack-Vue.png)
![webpack vue2](images/notesImages/webpack-vue2.png)
![webpack vue3](images/notesImages/webpack-vue-el和template的关系.png)
![webpack vue4](images/notesImages/webpack-.vue文件封装.png)

### Webpack plugins
![webpack vue5](images/notesImages/webpack-plugin插件.png)
![webpack vue6](images/notesImages/webpack-plugin%20html.png)

## Vue CLI
![VUE CLI](images/notesImages/Vue%20Cli.png)
![VUE CLI Node](images/notesImages/Vue-CLI-Node.png)
![VUE CLI 安装](images/notesImages/Vue-CLI安装.png)
这里我使用了淘宝镜像 cnpm  
cli3.x 创建项目：vue create 项目名
![Vue-CLI2详解](images/notesImages/Vue-CLI2详解.png)  
node运行原理，直接**node js文件** 可不通过浏览器运行js文件
![node运行原理](images/notesImages/node运行原理.png)
![somenotes](images/notesImages/somenotes.png)

## runtime-complier runtime-only  
![vue程序运行过程](images/notesImages/vue程序运行过程.png)  
主要看src->main.js   
### 1.runtime-complier  
执行过程：template -> ast -> render -> vdom -> UI   
```new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```
### 2.runtime-only  
执行过程： render -> vdom -> UI  
优点：1.性能更高 2.代码量更少  
.vue文件中的template是由vue-template-compiler处理的  
```new Vue({
  el: '#app',
  render: h => h(App)
})
```


