
// 给定一个没有重复数字的序列，返回其所有可能的全排列。

// 示例:

// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var res = [];
  var used = (new Array(nums.length)).fill(false);
  permuteResc(nums, used, 0, [], res);
  return res;
};

function permuteResc(nums, used, index, temp, res) {
  if(index == nums.length) {
    var finaTemp = cloneArr(temp);
    res.push(finaTemp);
    return;
  }
  for(var i=0; i<nums.length; i++) {
    if(!used[i]) {
      temp.push(nums[i]);
      used[i] = true;
      permuteResc(nums, used, index+1, temp, res);
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


console.log(permute([1, 2, 3]));
