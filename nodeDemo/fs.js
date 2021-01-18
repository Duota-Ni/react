const fs = require('fs'); //文件操作
//增删改查
//1.文件操作 2.目录操作

//文件操作
// fs.writeFileSync('1.txt','我是写入的文字',function(err){
//   if(err){
//     return console.log(err);
//   }
//   console.log('写入成功');
// })

//flag: w：写入(会覆盖); a:追加; r:读取
// fs.writeFileSync('1.txt','我是写入的文字',{flag:'w'},function(err){
//   if(err){
//     return console.log(err);
//   }
//   console.log('写入成功');
// })

//文件读取
// fs.readFile('1.txt','utf8',(err,data)=>{
//   if(err){
//     return console.log(error);
//   }
//   console.log(data);
// })

// fs.readFile('1.txt',(err,data)=>{
//   if(err){
//     return console.log(error);
//   }
//   //不加utf8就打印buffer字符串
//   console.log(data);
//   console.log(data.toString());
// })

//所有文件操作，没有加Sync都是异步，否则是同步
//异步就是要回调拿到结果
//同步要获取返回值

//同步：
// let data = fs.readFileSync('1.txt');
// console.log(data.toString());

//修改（修改名称）
// fs.rename('1.txt','2.txt',err=>{
//   if(err){
//     return console.log(err);
//   }
//   console.log('修改成功');
// })

//删除
// fs.unlink('2.txt',err=>{
//   if(err){
//     return console.log(err);
//   }
//   console.log('删除成功');
// })

//复制 先读取，再写入
// fs.copyFile('http.js','http_copy.js',err=>{
//   if(err){
//     return console.log(err);
//   }
//   console.log('复制成功');
// })

//自定义复制函数y
function myCopy(src,dest){
  fs.writeFileSync(dest,fs.readFileSync(src))
}
myCopy('http.js','http22.js')

