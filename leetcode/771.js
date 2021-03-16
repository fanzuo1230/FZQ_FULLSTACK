let j=Array.from("jewels");
let s=Array.from("stones");
let result = j.filter(item => !s.some(e => e === item));
console.log(result)