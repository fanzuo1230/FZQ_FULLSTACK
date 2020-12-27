// 函数   对象
// js 的类型
const arr=[1,2,3];
console.log(typeof arr);//object
arr.push(4);
console.log(arr);
const obj ={a:1};
obj.b=2;
let a;//声明变量   undefiend  类型未定义
console.log(typeof a);
a=1;
console.log(typeof a);
function Cart(){
    this.type="泽尔"
}
Cart.prototype.sayHello=function(){
    console.log('喵');
}