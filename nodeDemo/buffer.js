//Buffer缓存区，node的一个类

//创建
//node6.0前
// new Buffer()

//node6.0后
// let buffer = Buffer.alloc(10)
// console.log(buffer);

// let buffer = Buffer.from('大家好')
// console.log(buffer); //<Buffer e5 a4 a7 e5 ae b6 e5 a5 bd> 两位16进制

//js要4位才能识别,并且数组
// let buffer = Buffer.from([0xe5,0xa4,0xa7,0xe5,0xae,0xb6,0xe5,0xa5,0xbd])
// console.log(buffer.toString()); 

//连接
let buffer1 = Buffer.from([0xe5,0xa4,0xa7,0xe5])
let buffer2 = Buffer.from([0xae,0xb6,0xe5,0xa5,0xbd])
// // console.log(buffer1.toString()); 
// //注意concat里面也是数组
// let newbuffer = Buffer.concat([buffer1,buffer2])
// console.log(newbuffer.toString());

//性能更高
let { StringDecoder } = require('string_decoder')
let decoder = new StringDecoder()
let res1 = decoder.write(buffer1)
let res2 = decoder.write(buffer2)
console.log(res1+res2);