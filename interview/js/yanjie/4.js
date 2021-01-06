//es6 提供新的数据结构
// 1. 为了数组的优化而来
// Set Map 两种数据结构  存放特定的数据集合的
const people = new Set();//new set() 不添加重复数组
people.add('火宣');
people.add('宝贝');
people.add('我爱你');
people.add('火宣');
people.add('宝贝');
people.add('我爱你');
for(const person of people){
    console.log(person);
    //火宣
    // 宝贝
    // 我爱你
}
// console.log(people);//Set(3) { '火宣', '宝贝', '我爱你' }
const students =new Set(['饶','煊','我','爱','你']);
students.add('你是我宝');
console.log(students)
