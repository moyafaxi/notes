// 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

// 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { // 暴力解法
    let ret = [];
    for(let i=0; i<nums.length; i++) {
        for(let j=0; j<nums.length; j++) {
            if(i!=j && (nums[i]+nums[j]==target)) { // 两个指针不等，且和等于目标值直接返回
                ret.push(i);
                ret.push(j);
                return ret;
            }
        }
    }   
};

console.log(twoSum([2, 7, 11, 15], 9));