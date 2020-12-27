
/**
 * 
 * @author fzq
 * @param {any} o 
 * @param {string} type 
 * @return  boolean
 */
// const isTypeof=(o,type)=>{
//     //打补丁 加判断
//     if(typeof o === type )
//         return  typeof o===type  ;//返回数据类型
//     else{
//         console.log(typeof o)
//     }
//         // console.log('是对象')
// }
const isTypeof=(o,type)=>{
    if(['number','boolean','function','string'].indexOf(type)>0){
        console.log(typeof o); 
        return typeof o===type ;
       
    }
    
        return Object.prototype.toString.call(o).toLowerCase().indexOf(type )>0

   
        // console.log('是对象')
}

// let a=[1,2,3];
// let a =()=>{}
let a = "hello";
// let a 
// let  a = null;//宁缺
//  null  跟  array  是有问题的
console.log(isTypeof(a,'string'));