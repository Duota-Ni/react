# 关于Vue的笔记（针对本人的理解点和重难点）  

vue的数据绑定跟微信小程序有点像  
指令带有前缀 v-  
如：v-if v-for

## MVVM 
![MVVMpocture](images/notesImages/MVVM.png)
Model数据绑定到View,x响应式，将Model的改变实时反应到Vi额外中  
DOM监听，发生事件改变对应的Data
![MVVM2](images/notesImages/MVVM2.png)

## 生命周期  
![生命周期](images/notesImages/lifecycle.png)

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

## npm run build 和 npm run dev实现过程  
![npm run build](images/notesImages/npm%20run%20build.png)
![npm run dev](images/notesImages/npm%20run%20dev.png)

## webpack.base.conf.js起别名
![webpack.base.conf.js起别名](images/notesImages/webpack.base.conf.js起别名.png)

## CLI3
![CLI3 认识](images/notesImages/CLI3-认识.png)
![CLI3 目录](images/notesImages/CLI3-目录.png)
![CLI3 配置1](images/notesImages/CLI3-配置去哪里了.png)
![CLI3 配置2](images/notesImage/../notesImages/CLI3-自定义配置.png)

## 箭头函数和this  
//问：箭头函数中this的值是如何查找的呢？  
//答：向外层作用域一层层地查找this,直到找到有this的定义  
```
const obj = {
  aaa() {
    setTimeout(function () {
      //1
      console.log(this);//window
      //2
      setTimeout(function () {
        console.log(this);//window
      })
      //3
      setTimeout(() => {
        console.log(this);//window
      })
    })
    //4
    console.log(this);//object
    setTimeout(() => {
      //5
      console.log(this);//object
      //6
      setTimeout(function () {
        console.log(this);//window
      })
    })

    //7
    setTimeout(() => {
      console.log(this);//object
    })

  }
}

obj.aaa();
```

## router
![router是什么](images/notesImages/router-是什么.png)
### 前端渲染，后端渲染
#### 后端渲染  
![后端路由](images/notesImages/router-后端路由.png) 
![后端渲染](images/notesImages/后端渲染.png)   
#### 前后的分离
前后的分离中静态资源服务器放置了好几套html+css+js 每个url对应各自的html+css+js  
![前后端分离2](images/notesImages/前后端分离阶段2.png)
![前后端分离](images/notesImages/前后端分离阶段.png)
#### SPA与前端路由   
SPA单页面富应用阶段 
![SPA单页面富应用阶段](images/notesImages/SPA单页面富应用阶段.png)   
前端路由和SPA  
![前端路由和SPA](images/notesImages/前端路由和SPA.png)  
前端路由和组件的关系  
![前端路由和组件的关系](images/notesImages/前端路由和组件的关系.png)
##### 如何实现更改url而不向服务器请求刷新  
![URL的hash](images/notesImages/URL的hash.png)  
![HTML5的history模式：pushState](images/notesImages/HTML5的history模式：pushState.png
![HTML5的history模式：replaceState](images/notesImages/HTML5的history模式：replaceState.png)
![HTML5的history模式：go](images/notesImages/HTML5的history模式：go.png)

## vue-router  
![vue-router-认识](images/notesImages/vue-router-认识.png)  
vue-router安装配置，也可以直接脚手架安装  
![vue-router安装配置](images/notesImages/vue-router-安装配置.png)
![vue-router link/view](images/notesImages/vue-router-router-link-view.png)
默认是hash模式，可以修改为HTML5的history模式   
![vue-router-HTML5的history模式](images/notesImages/vue-router-HTML5的history模式.png)
![vue-router-router-link补充](images/notesImages/vue-router-router-link补充.png)
![vue-router-router-link直接全部修改linkActiveClass](images/notesImages/vue-router-router-link直接全部修改linkActiveClass.png)
![vue-router打包文件解析](images/notesImages/vue-router打包文件解析.png)
![vue-router懒加载认识](images/notesImages/vue-router-懒加载认识.png)
![vue-router懒加载结果](images/notesImages/vue-router-懒加载结果.png)
![vue-router-懒加载的方式](images/notesImages/vue-router-懒加载的方式.png)
![vue-router路由嵌套](images/notesImages/vue-router-路由嵌套.png)
![vue-router传递参数的方式](images/notesImages/vue-router-传递参数的方式.png)