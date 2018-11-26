// 8. 特殊限制（环视否定）

// （8.1）使用\d{1,3}匹配1-999的数据，不能以0开头
// 需求：使用\d{1,3}匹配每行中1-999的数据，不能以0开头

// 源串：
// 1
// 10
// 100
// 999
// 1000
// 01
// 001

// 预期：匹配
// 1
// 10
// 100
// 999

// 正则：

// var tarArr = ['1', '10', '100', '999', '1000', '01', '001'];

// var pattern = /(?!^0)+^(\d{1,3})$/;

// var ret = [];

// for(let i=0; i<tarArr.length; i++) {
//     if(pattern.test(tarArr[i])) {
//         ret.push(tarArr[i]);
//     }
// };

// console.log(ret);



// 需求：匹配除了<span>内容</span>标签外的所有<tagName>内容</tagName>格式标签

// 源串：
// <div>匹配我</div>
// <span>不匹配我</span>
// <p>匹配我</p>
// <i>匹配我</i>

// 预期：匹配
// <div>匹配我</div>
// <p>匹配我</p>
// <i>匹配我</i>

// 正则：

var tarArr = ['<div>匹配我</div>', '<span>不匹配我</span>', '<p>匹配我</p>', '<i>匹配我</i>'];

var pattern = /^<(?!span)/;

var str = '<span>不匹配我</span>';

var ret = [];

for(let i=0; i<tarArr.length; i++) {
    if(pattern.test(tarArr[i])) {
        ret.push(tarArr[i]);
    }
};

console.log(ret);