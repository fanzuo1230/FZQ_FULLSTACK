
// 有哪些情况会是undefined？
// 1.变量声明时，JS类型由值来决定（声明但未赋值）
let a;  //声明但未赋值
console.log(typeof a);//undefined
// 2.函数没有返回值
const fnNoReturn=()=>{}
console.log(fnNoReturn());//undefined
console.log(fnNoReturn(),'3');//undefined '3'
// 3.参数不传值
const fn=(b)=>{
    // 一运行就会有的 this  指针对象  指向一个对象
    console.log(arguments);
    console.log(typeof b);
}
console.log(fn(1,2,3));
//  4. 当对象被赋值的是一个未被定义的
const o ={c:'1'};
console.log(o.d,4);//undefined
console.log(zr);//语法错误


console.log(null==undefined);//ture
console.log(null===undefined);//false

