function duplicateCount  (word){
    //es6 里定义的新的数据结构有哪些？
    // 1. Map
    let map = new Map();//es6 提供的 数据结构
    // HashMap   key => value for O(n){}
for(let char of word){
  if(map.has(char)){
    map.set(char,map.get(char)+1);
  }
    else{
        map.set(char,1);
    }
    }
    return map
}
console.log(duplicateCount("sdadasdasdsadasf"))