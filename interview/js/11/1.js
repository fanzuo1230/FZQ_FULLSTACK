const arr = [3,4,5];
// 给数组的尾部/头部 加、删的方法
arr.push(6); //面对对象的
console.log(arr.pop());
console.log(arr);


arr.unshift(1);// 在队头插入一个元素
arr.shift(1);// 在队头删除一个元素
console.log(arr);

//把数组打印出来的方法有几种？
for(let num in arr){
    console.log(num);
}

arr.forEach(item=>{
    console.log(item);
})

console.log(arr.join(""))

console.log(arr.splice(0,arr.length));//切割

console.log(arr.map(item=>item))