function Cat(name,color){
    //new 的过程一定会执行Cat
    this.name=name;//this? 指向它实例
    this.color=color;
    // return this
    // this.type="猫科动物";
    // //prototype 要生成的原因
    // this.eat=function(){
    //     console.log('老鼠');
    // }
}
//原型对象
Cat.prototype.eat=function(){
    console.log("老鼠");
}
Cat.prototype.type='猫科动物'
//实例化
var cat1=new Cat("大毛","褐色");
var cat2=new Cat("小毛","黑色");

console.log(cat1.constructor==cat2.constructor);//构造函数
console.log(cat1 instanceof Cat);
console.log(cat2 instanceof Cat);
cat1.eat();
console.log(cat1.type);