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
