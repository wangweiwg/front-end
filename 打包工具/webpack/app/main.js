// 引入模块
var helloworld = require('./helloworld.js');

console.log(helloworld)
// 在父节点下追加元素
document.getElementById('container').appendChild(helloworld());