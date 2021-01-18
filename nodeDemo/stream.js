// stream 流 能够像流水一样分块读取，解决文件过大内存溢出的问题

const fs = require('fs')
// 一般的读取
// const res = fs.readFileSync('1.txt')
// console.log(res.toString())

// 流
// // chunk就是一个小块
const rs = fs.createReadStream('1.txt')
const ws = fs.createWriteStream('2.txt')
// 复制
rs.pipe(ws)
// let num = 0
// let str = ''
// rs.on('data',chunk => {
//   num++
//   // console.log(chunk.toString())
//   str += chunk
//   // console.log(num)
// })
// //流完成了
// rs.on('end',()=>{
//   console.log(str)
// })
// // 创建一个65kb的文件
// let buffer = Buffer.alloc(64*1024)
// fs.writeFile('64kb',buffer,err=>{
//   if(err){
//     return console.log(err)
//   }
//   console.log('写入成功');
// })