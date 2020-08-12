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

