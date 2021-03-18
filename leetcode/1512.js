/**
 * 给你一个整数数组 nums 。
如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
返回好数对的数目。
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let number=0;
for(var i=0 ;i<nums.length;i++){//for循环，让nums[i]表达数组元素
    nums.map(item=>{//map遍历，每次遍历都与nums比较，若相等 number++
        if(nums[i]==item){
            number++
        }
    })
}//因为每次遍历都会与本身比较所以得减去自身长度，并且会出现两次相同情况所以/2
return (number-nums.length)/2  
};
