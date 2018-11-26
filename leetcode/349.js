// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [9,4]
// 说明:

// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var record = new Set();
    var resSet = new Set();
    var resArr = new Array();
    nums1.forEach(item=>{
      record.add(item)
    })
    
    nums2.forEach(item=>{
      if(record.has(item)) {
        resSet.add(item);
      }
    })

    resSet.forEach(item=>{
      resArr.push(item);
    })
    return resArr;
};

console.log(intersection([1,2,2,1], [2,2]));