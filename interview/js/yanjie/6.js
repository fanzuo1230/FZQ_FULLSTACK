function duplicateCount(text){
    var str = text.toLowerCase().split('').sort().join('')//aaaddffgssswww
    // 相邻的字符是一样的，
    // [取值范围]   \d 数字  （）+正则表示分组   \1 表示之前匹配到第几个小组  ([a-zA-Z])\1 相同的字符
    var arr= str.match(/(.)\1/g);
    return arr.length
}
console.log(duplicateCount('asdfgdsafwsaww'))

//请得到所有的数字
// /\d+/ 正则表达式  ，判断字符串是否符合规则
// var word ='123-4560-6666';
// // console.log(/\d+/.test(word));
// console.log(word.match(/\d+/g));