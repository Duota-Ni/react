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