// /**
//  * 自顶向下 递归解法 超过时间限制了 递归效率太低
//  * @param {Array} nums 
//  */
// var rob = function(nums) {
//     var memo = [];
//     function tryRob(nums, idx) {
//         if(idx > nums.length-1) {
//             return 0;
//         }

//         if(memo[idx]) {
//             return memo[idx]
//         }
    
//         var res = 0;
//         for(var i=idx; i<nums.length; i++){
//             res = Math.max(res, nums[i]+tryRob(nums, i+2));
//         }

//         memo[idx] = res;
//         console.log(memo);
//         return res;
//     }

//     return tryRob(nums, 0);
// };

// 自底向上 动态规划解法 需要额外的空间存放中间解  空间换时间
var rob = function(nums) {
    var n = nums.length;
    
    var memo = new Array(n);
    memo.fill(-1)
    if(n === 0) {
        return 0;
    }

    memo [n-1] = nums[n-1];

    for(var i=n-2; i>=0; i--) {
        for(var j=i; j<n; j++){
            memo[i] = Math.max(memo[i], nums[j] + ( j+2<n ? memo[j+2] : 0));
            console.log(memo[i]);
        }
    }
    return memo[0];
};

console.log(rob([1,2,3,1]));