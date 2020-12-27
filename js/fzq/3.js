//对象
// 抽象的概念 类  es6 之前没有class关键字
// Cat 作为模板 父类
var Cat = {
    name:'',
    color:'',
    sayHello(){
        
    }
}

//JS 是基于原型的继承
var cat1={};  //子类 JSON
cat1.name="小黑";
cat1.color="黑色";

var cat2={};  //创建空的对象

cat2.name="小鬼";
cat2.color="红色";


// 缺点  JS 代码表达里要表达好多对象， 写起来繁琐