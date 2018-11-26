// 10. 分组可选
// （10.1）分组可选
// 需求：判断如果单词以A开头，匹配Apple；如果单词以B开头，匹配Banana；否则匹配Empty

// 源串：
// Angle
// Apple
// Banana
// Best
// Empty

// 预期：匹配
// Apple
// Banana
// Empty

// 正则：

// var tarArr = ['Angle', 'Apple', 'Banana', 'Best', 'Empty'];

// var pattern = /(^A(?=pple)|^B(?=anana)|^Empty$)/;

// var str = '<span>不匹配我</span>';

// var ret = [];

// for(let i=0; i<tarArr.length; i++) {
//     if(pattern.test(tarArr[i])) {
//         ret.push(tarArr[i]);
//     }
// };

// console.log(ret);




// （10.2）分组可选与分组引用
//  需求：匹配html标签的属性值，属性值可以由双引号、单引号、无单双引号定界

//  源串：
//  <div id="I'm Zjmainstay" class="name" data-year=2017 age='27'>

//  预期：分组匹配
//  I'm Zjmainstay
//  author
//  2017
//  27

//  正则：



