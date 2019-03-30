// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b)=>{
    return a - b
  })
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let curItem = nums[i]
    if (curItem > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let tarItem = 0 - curItem;
    let l = i + 1;
    let m = nums.length - 1;
    while (l < m) {
      if (nums[l] + nums[m] == tarItem) {
        res.push([curItem, nums[l], nums[m]]);
        while (l < m && nums[l] == nums[l+1]) ++l;
        while (l < m && nums[m] == nums[m-1]) --m;
        ++l
        --m;
      } else if (nums[l] + nums[m] < tarItem) {
        ++l
      } else {
        --m
      }
    }
  }

  return res
};


// 解题思路

// 对于遍历到的数，用0减去这个当前的数得到一个target，然后只需要再之后找到两个数之和等于target即可。
// 我们用两个指针分别指向当前数字之后开始的数组首尾两个数，如果两个数和正好为target，则将这两个数和当前的数一起存入结果中。
// 然后就是跳过重复数字的步骤了，两个指针都需要检测重复数字。如果两数之和小于target，则我们将左边那个指针l右移一位，使得指向
// 的数字增大一些。同理，如果两数之和大于target，则我们将右边那个指针m左移一位，使得指向的数字减小一些，