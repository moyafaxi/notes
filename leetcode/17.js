// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// {
//   1: '',
//   2: 'abc',
//   3: 'def',
//   4: 'ghi',
//   5: 'jkl',
//   6: 'mno',
//   7: 'pqrs',
//   8: 'tuv',
//   9: 'wxyz'
// }

// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。


/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) { 
  if(!digits) {
    return [];
  }
  var res = [];
  combinations(digits, 0, '', res);
  return res;
};

var letterMap = { // 数字对应字符串的映射关系
  1: '',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}
/**
 * @msg: 
 * @param { String }  // digits 数字字符串
 * @return { Array }  // 解
 */
function combinations(digits, index, tempStr, res) {
  // 递归终止条件
  if(index == digits.length) {
    res.push(tempStr);
    return res;
  }
  var curStr = letterMap[digits.charAt(index)];
  for(var i=0; i<curStr.length; i++) {
    combinations(digits, index+1, tempStr+curStr.charAt(i), res)
  }
}


// 分析
// "234"
//            2(a, b, c)
//         /  |  \
//        a   b   c
//       /
//   3(d, e, f)
//   /   |   \
//  d    e     f

// digits(123) = letter(1)+digits(23) = letter(1) + letter(2) + letter(3)  形式化表达式