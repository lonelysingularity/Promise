// todo: js当中判断是否存在某个值 
let arr = ['ant', 'bison', 'camel', 'duck', 'bison'];
//  tag: 1.Array.prototype.indexOf() 不存在为-1
console.log(arr.indexOf('camel'));  // => 2
console.log(arr.indexOf('arr'));    //=> -1
//  tag: 2.Array.prototype.includes() 不存在为false
console.log(arr.includes('ant'));   //=>true
//  tag: 3.Array.prototype.find() 返回的是第一个元素的值 无则为undefined
console.log(arr.find(e => e == '1'));   //=>undefined
//  tag: 4.Array.prototype.findIndex() 返回的是第一个元素的索引 无则为-1
console.log(arr.findIndex(e => e == '1')) //=>-1
//  todo:  判断是否存在对象的某个值
const userList = [{id:1, name:'name1'}, {id:2, name:'name2'}, {id:3, name:'name3'}]
//  tag: 1.Array.prototype.find()
const res = userList.find((ev) => {
    return ev.id === 3;
});
console.log(res);
//  tag: 2.Array.prototype.findIndex()
const resIndex = userList.findIndex((ev) => {
    return ev.id === 3;
});
console.log(resIndex);


