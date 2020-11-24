console.log('i am index.js');
const { Person } = require('./Ma.js');
const Ma = require('./Ma.js')
console.log(Ma.a);
const yang = new Person()
console.log(yang.name);
yang.hobby()