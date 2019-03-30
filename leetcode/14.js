// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = ''
  if (strs.length == 0) {
    return res
  }

  if (strs.length == 1) {
    return strs[0]
  }

  for (let i = 0; i < strs[0].length; i++) {
    let curLetter = strs[0].charAt(i)
    for (let j = 1 ; j < strs.length; j++) {
      if (!strs[j].charAt(i)) {
        return strs[0].substr(0, i)
      } else if (strs[j].charAt(i) != curLetter) {
        return strs[0].substr(0, i+1)
      } else {
        res = strs[0].substr(0, i+1)
      }
    }
  }
  return res
};

console.log(longestCommonPrefix(["flower","flow","flight"]))