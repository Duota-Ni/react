const http = require('http');
const server = http.createServer((req,res)=>{
  res.write('hello world112221');
  res.end();
})
server.listen(8080);//端口