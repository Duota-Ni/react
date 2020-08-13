//1.导入的{}中定义的变量
import { flag, sum } from "./aaa.js";

if (flag) {
  console.log('lllll');
}

//2.直接导入export定义的变量
import { number, height } from "./aaa.js";
console.log(number+' '+height);

//3.导入export的function
import {mul,Person} from "./aaa.js";
console.log(mul(12,39));

const p = new Person();
p.run()

//导入default
import addr from "./aaa.js";
console.log(addr());

//统一全部导入
import * as aaa from "./aaa.js";
console.log(aaa.flag);
