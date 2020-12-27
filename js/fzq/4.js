//函数天生是可以复用的

// var Cat = {
//     name:'',
//     color:'',
//     sayHello(){
        
//     }
// }
//如何复用
function Cat(name,color){
    return{
        name,
        color
    }

}

var cat1=Cat("小河","蓝色");
var cat2=Cat("黑蛋","黑色");