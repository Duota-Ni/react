var name = "小明";
var age = 18;
var flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

//1.导出方式一
export {
  flag, sum
}

//2.导出方式二
export var number = 1000;
export var height = 1.88;

//3.导出函数/类
export function mul(num1,num2){
  return num1+num2;
}
export class Person{
  run(){
    console.log("在奔跑");
  }
}

//5.export default,只能有一个
// const address ="北京市";
// export default address;
export default function(){
  console.log("default function");
}