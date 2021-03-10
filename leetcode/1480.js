/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let res=[];//建立新数组
    var num=0;//设置一空值
    for(let i=0;i<nums.length;i++){
        num+=nums[i];//赋值
        res.push(num);//放入新数组中
    }
    return res
    };