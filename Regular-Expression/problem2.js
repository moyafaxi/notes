// 2. 单字符或
// 或条件是正则使用过程中常用的概念，比如，密码由字母或数字组成，这里就用到了或条件，而且，由于字母或数字都是单个字符，因此，可以使用[a-z0-9]这样的单字符或语法实现。 
// 常犯错误：匹配a或b写成[a|b]，此表达式实际上表示a或b或|，在[]内部的|表示其本身，注意区分(a|b)表示a或b的写法。

// （2）单字符或
// 需求：匹配由 A/S/D/F 4个字母(区分大小写)组成的长度为3字符串
// 源串：
// ABC
// ASD
// ADS
// ASF
// BBC
// A|S
// A|D
// ASDF
// 预期：以[]元字符获得3个字母的或集，匹配 ASD/ADS/ASF 3组数据
// 正则：


var tarArr = ['ABC', 'ASD', 'ADS', 'ASF', 'BBC', 'A|S', 'A|D', 'ASDF'];

var pattern = /^(A|S|D|F){3}$/;

var ret = [];

for(let i=0; i<tarArr.length; i++) {
    if(pattern.test(tarArr[i])) {
        ret.push(tarArr[i]);
    }
};

console.log(ret);

