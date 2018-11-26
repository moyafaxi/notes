//  9. 替换分组使用
// （9.1）给源串每个链接加上http://www.zjmainstay.cn前缀
//  需求：给源串每个链接加上http://www.zjmainstay.cn前缀

//  源串：
//  <a id="link-1" href="/regexp-one">正则文章合集（All In One)</a>
//  <a id="link-2" href="/my-regexp">正则入门教程</a>
//  <a id="link-3" href="/deep-regexp">正则高级教程</a>
//  <a id="link-4" href="/regexp-lookaround">正则环视详解</a>
//  <a id="link-5" href="/php-curl">PHP cURL应用</a>

//  预期：替换得到
//  <a id="link-1" href="http://www.zjmainstay.cn/regexp-one">正则文章合集（All In One)</a>
//  <a id="link-2" href="http://www.zjmainstay.cn/my-regexp">正则入门教程</a>
//  <a id="link-3" href="http://www.zjmainstay.cn/deep-regexp">正则高级教程</a>
//  <a id="link-4" href="http://www.zjmainstay.cn/regexp-lookaround">正则环视详解</a>
//  <a id="link-5" href="http://www.zjmainstay.cn/php-curl">PHP cURL应用</a>

//  查找：
//  替换：


var tarGet = ['<a id="link-1" href="/regexp-one">正则文章合集（All In One)</a>', '<a id="link-2" href="/my-regexp">正则入门教程</a>', '<a id="link-3" href="/deep-regexp">正则高级教程</a>', '<a id="link-4" href="/regexp-lookaround">正则环视详解</a>', '<a id="link-5" href="/php-curl">PHP cURL应用</a>'];

var pattern = /(?:href="\/)/;

var str = '<a id="link-1" href="/regexp-one">正则文章合集（All In One)</a>';

for(let i=0; i<tarGet.length; i++) {
    // tarGet[i] = pattern[Symbol.replace](str, 'href="http://www.zjmainstay.cn/');
    tarGet[i] = tarGet[i].replace(pattern, 'href="http://www.zjmainstay.cn/')
}

console.log(tarGet);
