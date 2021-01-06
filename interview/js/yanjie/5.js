const dogs = new Map();
const friends = new Map();
friends.set('饶','煊');
friends.set('我','爱');
friends.set('你');

// 输出遍历  得到  key  value
// for(const fa of friends){
//     console.log(fa);
// }
friends.forEach((key,value)=>console.log(key,value))

// for(const item of friends){
//     console.log(item[0],item[1])
// }  如何优化？
for(const [key,value] of friends){
    console.log(key,value)
} 
//解构
const [a,b]=[1,2]
// const {}= {"a":1,"b":2}
console.log(a,b);//1 2

