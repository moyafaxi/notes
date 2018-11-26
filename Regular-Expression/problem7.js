// 7. 存在（与）
// （7.1）校验密码必须包含字母、数字和特殊字符，6-16位
// 需求：校验密码必须包含字母、数字和特殊字符，6-16位，假定特殊字符为 -_= 三个字符

// 源串：
// 12345
// 123456
// 1234561234561234
// 12345612345612345
// a1234
// a12345
// -1234
// -12345
// a-123
// a-1234
// a-1234a-1234a-12
// a-1234a-1234a-1234
// aaaaa
// aaaaaa
// -_=-_
// -_=-_=

// 预期：匹配
// a-1234
// a-1234a-1234a-12

// 正则：

var tarArr = ['12345', '123456', '1234561234561234', '12345612345612345', 'a1234', 'a12345', '-1234', '-12345', 'a-123', 'a-1234', 'a-1234a-1234a-12', 'a-1234a-1234a-1234', 'aaaaa', 'aaaaaa', '-_=-_'];

var pattern = /(?=^.{6,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[-_=])/;

var ret = [];

for(let i=0; i<tarArr.length; i++) {
    if(pattern.test(tarArr[i])) {
        ret.push(tarArr[i]);
    }
};

console.log(ret);