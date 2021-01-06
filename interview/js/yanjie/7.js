var reg = /(\d{4})-(\d{2})-(\d{2})/;
var dateStr = '2021-01-06';
reg.test(dateStr);  //true
console.log(RegExp.$1,RegExp.$2,RegExp.$3);
