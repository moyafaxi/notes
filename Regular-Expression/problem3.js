// 3. 多字符或
// 相对单字符或条件，多字符或也是很常见的，比如，我们需要匹配http或ftp两个协议头的url，就需要^(http|ftp)://.+$这样的语法来实现。

// （3）多字符或
// 需求：匹配每行数据中以.jpg/.jpeg/.png/.gif结尾的图片名称（含后缀）
// 源串：
// image.jpg
// image.jpeg
// image.png
// image.gif
// not_image.txt
// not_image.doc
// not_image.xls
// not_image.ppt
// 预期：匹配 image.jpg/image.jpeg/image.png/image.gif 4个结果
// 正则：


var tarArr = ['image.jpg', 'image.jpeg', 'image.png', 'image.gif', 'not_image.txt', 'not_image.doc', 'not_image.xls', 'not_image.ppt'];

var pattern = /(\.jpg|\.jpeg|\.png|\.gif)$/;

var ret = [];

for(let i=0; i<tarArr.length; i++) {
    if(pattern.test(tarArr[i])) {
        ret.push(tarArr[i]);
    }
};

console.log(ret);