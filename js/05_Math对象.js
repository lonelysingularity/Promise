Math.pow(2,10)//=>2的10次方
Math.round(.6)//=>1 舍入到最近的整数
Math.ceil(.6)//=>1 向上舍入到一个整数
Math.floor(.6)//=>0 向下舍入到一个整数
Math.abs(-5)//=>5 绝对值
// Math.max(x,y,z)//=>返回最大的参数
// Math.min(x,y,z)//=>返回最小的参数
Math.random()//=>伪随机数x 0 <= x < 1
Math.PI//=> Π:圆周率
Math.E//=> e:自然对数
Math.sqrt(3)//=>根号3 3的平方根

//  tag: es6新增
Math.cbrt(27) //=>3 立方根
Math.hypot(3, 4)//=>5 所有参数和的平方根
Math.trunc(3.9)//=>3 剪掉分数部分的整数

// tag:JavaScript预订了全局常量Infinity 和NaN以对应无穷数以及非数值


console.log(Math.trunc(3.9));
console.log(parseInt(3.9));
console.log(parseFloat(3.9))

// tag: 二进制浮点表示法无法精确的表示哪怕0.1这么简单的数
let x = .3 - .2
console.log(x);
let y = .2 - .1
console.log(y);
let date = new Date()
let ms = Date.now()
console.log(ms);
console.log(date.getTime());
let iso = date.toISOString()
console.log(iso);
const {performance} = require("perf_hooks")
console.log(performance.now())







