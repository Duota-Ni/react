node.js不是框架，它就只是一个js
 
 2020.11.23 22.52
 未 05npm包管理器
## 02服务端客户端
[http.js](http.js)

## 03node中的模块化
AMD sea.js  
CMD require.js  

## 04node_modules
node_modules文件夹专门存放node的模块  
引用时直接引用文件，不需要加./ ../这样的路径，如  
```js
require('myTest')
```
引用时一般引用index.js文件 除非在package.json中将"main"修改为其他文件

## 05npm包管理器 
npm install something = npm i something  
npm install something@3.1.4  
npm init (package.json)   
npm uninstall   

## 06npm常用指令  
在package.json中  
```js
  "dependencies": {}, //运行依赖,在开发过程和打包上线中都会用到,如vue,jquery,react  
  //npm安装指令后加 --save 简写 -S

  "devDependencies": {}, //开发依赖，只在开发过程中用到，如less,sass  
  //npm安装指令后加 --save-dev 简写 -S
```
- 路径 -g
require('someModule')获取路径可以是从该文件父目录的node_modules中获取   
最终的根路径为：npm root -g 中的路径,比如现在这里的是C:\Program Files\nodejs\node_global\node_modules   
默认情况下不加-g会安装到当前目录的node_modules里面（表示局部安装）    
加`-g`就会安装在npm root -g的目录中（表示全局安装）  

## 07fs文件操作 
[fs.js](./fs.js)
内置模块不需要安装，外置模块需要安装   
nodejs内置模块有：Buffer,C/C++Addons,ChildProcess,Cluster,Console，Cryoto,Debugger,DNS,Domain,Errors,Events,Flie System,Globals,HTTP,HTTPS,Modules,Net,OS,Path,Process,P unycode,Query Strings,Readline,REPL,Stream,String De coder,Timers,TSL/SSL,TTY,UDP/Datagram,URL,Utitles,V8,VM,ZLIB

## 08目录操作 09删除非空目录
[fileSystem.js](fileSystem.js)

## 10buffer
[buffer.js](buffer.js)

## 11stream流
[stream.js](stream.js)

## 12
[require.js](require/index.html)
