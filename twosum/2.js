/**
 * @author fzq
 * @date 2020-11-20
 * @param  {number[]}  nums
 * @param  {number}target
 * @return {number[]}
 */
//键头函数
 const twosum=(nums,target) => {
     //console.log('两数相加')
     let map={}; //JSON Object HashMap  哈希表   空间复杂度的花销 O(n)
     let res=[];
     //编写功能   一个函数完成  一个功能
     //es6 更简洁
     nums.forEach((e,i)=>map[e]=i);//callback,  for+执行功能  O(n)     多建立了一个空间 map减少了时间
     //console.log(map)
     for(let i=0;i<nums.length;i++){//O(n)
        let j=map[target-nums[i]];//如果不存在则为undefined 
        if(j&&j!==i){
            res=[i,j];
        }
     }
     return res;
 }

 console.log(twosum([2,7,11,15],9));