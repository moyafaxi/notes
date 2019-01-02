class Singleton { // 单例类
    constructor() {
        if (typeof Singleton.instance === 'object') {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}

// 测试
var uni = new Singleton();
var uni2 = new Singleton();

console.log(uni === uni2); // true
console.log(Singleton);