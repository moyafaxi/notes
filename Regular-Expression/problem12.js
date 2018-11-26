// 12. 贪婪模式
// 贪婪模式，正则会优先尽可能多地匹配能匹配到的内容。当剩余正则匹配剩余部分字符（源串）但无法满足匹配时，贪婪部分回溯，吐出已匹配的内容，尝试满足剩余部分字符的匹配。

// （12.1）匹配链接中的文件名
// 需求：利用贪婪模式，分组1得到每行链接中的文件名

// 源串：
// http://localhost.com/a/b/c/d/file1.txt
// https://localhost.com/a/b/file2long.jpg

// 预期：分组0匹配行数据，分组1匹配文件名
// file1.txt
// file2long.jpg

// 正则：

// var pattern = /^(http[s]?:\/\/.*\/(.*))$/;

// var str1 = 'http://localhost.com/a/b/c/d/file1.txt';
// var str2 = 'https://localhost.com/a/b/file2long.jpg';

// console.log(str2.match(pattern));

// （12.2）限定字符贪婪优化匹配性能
//  需求：匹配div id="author"的标签内容

//  源串：
//  <div id="author" class="author-text something-useless">Zjmainstay</div>

//  预期：利用贪婪模式去掉div中的噪点（无关数据），分组1匹配到Zjmainstay
//  正则：


var pattern = /(?:<div\sid="author".*>)+(.*)+(?:<\/div>)/;

var str1 = '<div id="author" class="author-text something-useless">Zjmainstay</div>';

console.log(str1.match(pattern)[1]);