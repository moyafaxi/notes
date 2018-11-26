//  1. 分组提取/非捕获组
//  分组，是正则里一个非常重要的概念，我们需要针对某个区域提取数据，往往需要依赖分组。而分组，其实就是正则里()括住的部分。


// （1.1）分组提取   
//  需求：在分组1中匹配meta中author属性的值
//  源串：
//  <meta author="Zjmainstay" />
//  another author="Zjmainstay too"
//  预期：分组1得到Zjmainstay
//  正则：

// ===================== solution =================================

var str1 = '<meta author="Zjmainstay" />';
var str2 = 'another author="Zjmainstay too"';

// var pattern1 = /(^<meta\sauthor=")/;

var pattern2 = /(author=")+(.*)+(")/g;

console.log(RegExp);

console.log(str1.match(pattern2));

// console.log(RegExp);
// console.log(RegExp.$2); // js没有反向肯定预查 只能通过RegExp $1-$9提取结果


// var tarArr = ['<meta author="Zjmainstay" />', 'another author="Zjmainstay too"', '<meta author="wangrui1" />'];

// var pattern1 = /(^<meta\sauthor=")/;
// var pattern2 = /(<meta\sauthor=")+(.*)+(?=")/g;

// var ret = [];

// for(let i=0; i<tarArr.length; i++) {
//     if(pattern1.test(tarArr[i]) && pattern2.test(tarArr[i])) {
//         ret.push(RegExp[$i]);
//     }
// };

// console.log(ret);



// （1.2）非捕获组
// 针对上面的分组，有时候，我们并不需要捕获某个分组的内容，我们可以使用非捕获组(?:表达式)，从而不捕获表达式部分内容到分组中。

// 需求：匹配每行字母个数是偶数个的数据，每行数据不为空，正则不能存在分组1
// 源串：
// a
// ab
// abc
// abcd
// 预期：
// 匹配得到 ab 和 abcd，不包含分组1
// 正则：

// ===================== solution =================================

// var tarArr = ['a', 'ab', 'abc', 'abcd'];

// var pattern = /^(?:\w{2}|\w{4})$/g;

// var str = 'ab';

// var ret = [];

// for(let i=0; i<tarArr.length; i++) {
//     if(pattern.test(tarArr[i])) {
//         ret.push(tarArr[i]);
//     }
// };

// console.log(pattern.test(str));
// console.log(ret);
