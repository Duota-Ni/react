require('./Mb')

console.log('i am ma.js');
const a = 10;
class Person{
  constructor() {
    this.name = '杨洋'
  }
  hobby(){
    console.log('跳舞');
  }
}
// module.exports = {
//   a,
//   Person
// }
exports.a = a;
exports.Person = Person;
//exports 是 module.exports的引用
//module.exports = exports;