// 创建服务器
const http = require('http')
const url = require('url')
const fs = require('fs')
const mime = require('./mime.json')
const path = require('path')
const server = http.createServer((req,res)=>{
  res.setHeader('content-type','text/html;charset=utf-8')
  // res.writeHead(300,{'content-type':'text/html;charset=utf-8'})
  let urlObj = url.parse(req.url)
  console.log(urlObj)
  // console.log(req.url)
  if (urlObj.pathname === '/' || urlObj.pathname === '/index') {
    // 文件方式
    // let indexData = fs.readFileSync('./views/index.html')
    // res.end(indexData)

    // 流方式
    let indexData = fs.createReadStream('./views/index.html')
    indexData.pipe(res)
  } else if (urlObj.pathname === '/product'){
    let productData = fs.createReadStream('./views/product.html')
    productData.pipe(res)
  } else {
    if (urlObj.pathname !== '/favicon.ico') {
      // 获取扩展名
      const ext = path.extname(urlObj.pathname)
      res.setHeader('Content-Type',mime[ext])
      let resData = fs.createReadStream('./views' + urlObj.pathname)
      resData.pipe(res)
    }
  }
  
})
server.listen(3000)