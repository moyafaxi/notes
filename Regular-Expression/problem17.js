// 18. 匹配溢出排除
// 匹配溢出，这不是一个术语名词，是我自己的叫法，主要指正则匹配内容超出了我们预期，导致匹配得到非预期的结果。

// （18.1）div标签匹配溢出

// 需求：匹配内容为数字的div

// 源串：
// <div class="aaa bbb">ABC</div><div class="bbb ccc">123</div>

// 预期：
// <div>123</div>
// 错误正则：/<div.*?>\d+<\/div>/

// 正则：






// （18.2）多字符排除
// 需求：匹配不包含某个单词或词语的内容

// 源串：
// http://www.zjmainstay.cn
// http://www.baidu.com
// http://www.qq.com

// 预期：
// http://www.zjmainstay.cn
// http://www.qq.com

// 正则：

var tarArr = ['http://www.zjmainstay.cn', 'http://www.baidu.com', 'http://www.qq.com'];

var pattern = /^(?!.*baidu.*)/;

var ret = [];

tarArr.forEach(item=>{
    if(pattern.test(item)) {
        ret.push(item);
    }
});

console.log(ret);
