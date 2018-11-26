// 15. |字符分界（|的作用域）
// |作为或条件分隔符，它的分隔区间常常存在误用。在使用|字符的过程中，我们常常需要结合()来对它进行限定。如，^([0-9]+|[a-z]+)$表示纯数字或纯字母，
// 如果没有()，那它又是另一种意思了。^[0-9]+|[a-z]+$等价于^[0-9]+或[a-z]+$，因此，它表示数字开头或者字母结尾，跟我们的需求有了很大的差别。

// （15）|字符分界

// 需求：在分组1中匹配css或script的链接

// 源串：
// <script src="main.min.js" type="text/javascript"></script>
// <link rel="stylesheet" type="text/css" href="main.css">

// 预期：
// main.min.js
// main.css
// 正则：


var tarArr = ['<script src="main.min.js" type="text/javascript"></script>', '<link rel="stylesheet" type="text/css" href="main.css" >'];

var pattern = /(?:(src="|href="))+(.*?)(?=")/;

var ret = [];

for(let i=0; i<tarArr.length; i++) {
    ret.push(tarArr[i].match(pattern)[2]);
};

console.log(ret);

