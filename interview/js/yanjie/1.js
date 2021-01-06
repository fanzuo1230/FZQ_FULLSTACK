let ran_num = Math.random();
console.log(ran_num);
console.log(Math.floor(2.3));//取整
console.log(Math.ceil(7.1));//进一位
console.log(Math.round(25.3));//四舍五入

// 0-9 之间的整数随机
let a = Math.floor(Math.random()*10)
console.log(a);

//在最小值和最大数之间的随机数
let max=100; 
    min=0;
let b = Math.floor(Math.random()*(max-min))+min