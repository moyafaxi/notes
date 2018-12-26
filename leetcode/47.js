// 给定一个可包含重复数字的序列，返回所有不重复的全排列。

// 示例:

// 输入: [1,1,2]
// 输出:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  var res = [];
  nums.sort((a, b)=>{
    return a-b
  })
  var used = (new Array(nums.length)).fill(false);
  permuteUniqueResc(nums, used, 0, [], res);
  return res;
};

function permuteUniqueResc (nums, used, index, temp, res) {
  if (index == nums.length) {
    var finaTemp = cloneArr(temp);
    res.push(finaTemp);
    return;
  }
  for (var i=0; i<nums.length; i++) {
    if (!used[i]) {
      if (i>0 && nums[i] == nums[i - 1] && !used[i - 1]) { // 如果前一个数与当前数相等且前一个数未使用过 则跳过本次循环
        // console.log(nums[i], nums[i - 1], used[i - 1])
        continue;
      } 
      temp.push(nums[i]);
      used[i] = true;
      permuteUniqueResc(nums, used, index+1, temp, res);
      temp.pop();
      used[i] = false;
    }
  }
}

function cloneArr(tar) {
  var res = [];
  tar.forEach(el => {
    res.push(el)
  });
  return res;
}

console.log(permuteUnique([3, 3, 0, 3]))