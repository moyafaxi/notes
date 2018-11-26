// 6. 存在（或）
// （6.1）匹配多种或条件的数据，没有特殊限制
// 需求：匹配每行中包含“作者”或者“读者”的数据

// 源串：
// 本文的作者是Zjmainstay
// 本文有很多读者
// 读者可以是任何一个地方的人
// 这里的任何一个地方说明读者也能在国外
// 什么乱七八糟的推理
// 你不匹配我，凭什么要我推荐你的博客 www.zjmainstay.cn

// 预期：匹配
// 本文的作者是Zjmainstay
// 本文有很多读者
// 读者可以是任何一个地方的人
// 这里的任何一个地方说明读者也能在国外
// 正则：


// var tarArr = ['本文的作者是Zjmainstay', '本文有很多读者', '读者可以是任何一个地方的人', '这里的任何一个地方说明读者也能在国外', '什么乱七八糟的推理', '你不匹配我，凭什么要我推荐你的博客 www.zjmainstay.cn'];

// var pattern = /(\u4f5c\u8005|\u8bfb\u8005)/;

// var ret = [];

// for(let i=0; i<tarArr.length; i++) {
//     if(pattern.test(tarArr[i])) {
//         ret.push(tarArr[i]);
//     }
// };

// console.log(ret);



// （6.2）匹配多种或条件的数据，有特殊限制（不使用环视）
// 需求：匹配每行中“读者”在开头或结尾的数据
// 源串：
// 本文作者是Zjmainstay，有很多读者
// 读者可以是任何一个地方的人
// 这里的任何一个地方说明读者也能在国外

// 预期：匹配

// 本文作者是Zjmainstay，有很多读者
// 读者可以是任何一个地方的人

// 正则：


// var tarArr = ['本文作者是Zjmainstay，有很多读者', '读者可以是任何一个地方的人', '这里的任何一个地方说明读者也能在国外'];

// var pattern = /(^\u8bfb\u8005|\u8bfb\u8005$)/;

// var ret = [];

// for(let i=0; i<tarArr.length; i++) {
//     if(pattern.test(tarArr[i])) {
//         ret.push(tarArr[i]);
//     }
// };

// console.log(ret);