const fs = require('fs'); //文件操作
//创建目录
// fs.mkdir('11',err=>{
//   if(err){
//     console.log(err);
//   }
//   console.log('创建成功');
// })

//重命名
// fs.rename('11', '22', err => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('成功')
// }
// )

//读取
// fs.readdir('22',(err,data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data)
// })

//删除（空目录/文件）
// fs.rmdir('22',err => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('ok')
// })

//判断文件或者目录是否存在
// fs.exists('fs.js',exists=>{
//   console.log(exists);
// })

//获取文件或者目录的详细信息
// fs.stat('22',(err,stat)=>{
//   if(err){
//     console.log(err);
//   }
//   // console.log(stat);
//   // let res = stat.isFile()

//   let res = stat.isDirectory()
//   console.log(res);
// })

//删除非空文件夹
//先把文件删除-->删除空目录
// 22
function removeDir(path){
  let data = fs.readdirSync(path);
   // ["33","1.txt","2.html"];
  for(let i=0;i<data.length;i++){
       // 是文件或者是目录； --->?文件 直接删除？目录继续查找；  
       let url = path + "/" + data[i];
       let stat =  fs.statSync(url);
       if(stat.isDirectory()){
           //目录 继续查找；
           removeDir(url);
       }else{
           // 文件 删除
           fs.unlinkSync(url);
       }
  }
   //  删除空目录
  fs.rmdirSync(path);
}
removeDir("22");