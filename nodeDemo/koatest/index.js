const Koa = require("koa")
const app = new Koa()
// app.use((ctx,next)=>{
//   // console.log(ctx)
//   ctx.body="你好"
// })
// 中间件
let middleware1 = async function(ctx,next) {
  console.log('one start...')
  ctx.body = "hello"
  ctx.state = 100
  // ctx.status = 302
  // ctx.set("location","http://www.baidu.com")
  // await new Promise(resolve=>{
  //   setTimeout(()=>{
  //     console.log(111)
  //     resolve()
  //   },1000)
  // })
  // throw new Error('some error...')
  await next()
  console.log('one end...')
}
let middleware2 = async function(ctx,next) {
  console.log('two start...')
  console.log(ctx.state)
  ctx.body = "world"
  console.log('two end...')
}
app.use(middleware1)
app.use(middleware2)
// 两个中间件放在一个异步的队列里 顺序one start, two start, two end, one end

// 错误处理中间件
app.on("error",err=>{
  console.log(err)
})
app.listen(3000)