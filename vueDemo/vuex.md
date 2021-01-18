# Vuex
## 一.是什么？
>官方：Vuex 是一个专为 Vue.js 应用程序开发的`状态管理模式`。它采用`集中式存储`管理应用的`所有组件`的`状态`，并以相应的`规则`保证状态以一种`可预测`的方式发生变化。  

>通俗理解：
>1. 将需要多个组件`共享`的变量全部存储在一个对象里面
>2. 将

## vuex中actions中函数默认自带参数context，为什么还可以写成{commit}或者{dispatch}或者其他的
[参考](https://blog.csdn.net/weixin_44898897/article/details/105435703)
comtext:上下文
context的话就相当于state的父亲，上一级，`包含着state中的所有属性`  

context:{  
        state,   等同于store.$state，若在模块中则为局部状态  
        rootState,   等同于store.$state,只存在模块中  
        commit,   等同于store.$commit  
        dispatch,   等同于store.$dispatch  
        getters   等同于store.$getters   
}  

常规写法调用的时候会使用context.commit，但更多的是使用es6的变量解构赋值，也就是直接在参数的  
位置写自己想要的属性，如：{commit}。  


**`dispatch：含有异步操作；而commit只是同步操作，都是提交 mutation`，因为`只能在mutation中才能够改变state中的值`，然而mutation中只能进行同步操作，从而actions就出现了，actions允许异步和同步操作，但是对于actions的操作其实就是提交mutation来完成**     