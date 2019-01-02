// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) {
      return s;
    }
    var maxLen = 0;
    var start = 0;

    function findLongestPalindrome (s, left, right) {
      while (left>=0 && right<s.length && s[left] == s[right]) {
        left--;
        right++;
      } 
      if (maxLen < right - left - 1) {
        start = left + 1;
        maxLen = right - left - 1;
      }
    }

    for(var i=0; i<s.length-1; i++) {
      findLongestPalindrome(s, i, i);
      findLongestPalindrome(s, i, i+1);
    }
    
    return s.substr(start, maxLen);
};
console.log(longestPalindrome('cbbd'));