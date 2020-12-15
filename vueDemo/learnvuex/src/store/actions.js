//actions处理异步 ,看图例！
//可以调用 context.commit 提交一个!! mutation !!，
//或者通过 context.state 和 context.getters 来获取 state 和 getters

export default {
  //context:上下文
  // aUpdateInfola(context,payload) {
  //   setTimeout(() => {
  //     context.commit('updateInfola')
  //     console.log(payload.message);
  //     payload.success();
  //   },1000)      
  // }

  aUpdateInfola(context,payload) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        context.commit('updateInfola')
        console.log(payload);

        resolve('111111')
      },1000) 
    })     
  }
}
