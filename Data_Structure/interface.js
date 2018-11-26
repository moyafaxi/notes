//鸭式辨型法：（不通过外表判断鸭子，而通过其是否有鸭子的特性来判断。如James Whitcomb Riley所说，像鸭子一样走路并且嘎嘎叫的就是鸭子）
//上面俩种都声明了自己实现了那些接口，其实声明不重要，实现接口核心的是类实现了接口方法集。如果类具有了接口定义的所有方法函数名相同的函数，那么认为它实现了接口

class Interface {
    constructor(name, method) {
        //检查参数个数是否正确
        if (arguments.length != 2) {
            throw new Error('Interface contructor 被调用时使用了' + arguments.length + '个参数,实际需要2个参数')
        }
        this.name = name;
        this.method = [];

        for (let i = 0, len = method.length; i < len; i++) {
            //检测参数类型
            if (typeof method[i] !== 'string') {
                throw new Error('Interface contructor 需要的方法名为字符串类型')
            }
            this.method.push(method[i]);
        }
    }
}

//类的静态方法
Interface.ensureImplements = function(object,...interfaces) {
    //检测参数长度
    if (arguments.length < 2) {
        throw new Error('Interface.ensureImplements方法调用时使用了' + arguments.length + "个参数,实际需要至少需要两个参数")
    }
    //遍历接口 检测是否为接口实例
    for (let i = 0, len = interfaces.length; i < len; i++) {
        let interfacel = interfaces[i];
        if (interfacel.constructor !== Interface) {
            throw new Error('Interface.ensureImplements 方法 需要第二个及后面的参数必须是Interface的实例');
        }

        for (let j = 0, methodLen = interfacel.method.length; 
        j < methodLen; j++) {
            let method = interfacel.method[j];
            //检测属性是否存在且是否是函数
            if (!object[method] || typeof object[method] != 'function') {
                throw new Error('Function Interface.ensureImplements:object 没有实现' + interfacel.name + "接口,接口方法" + interfacel.method + '没找到')
            }
        }
    }

}

// export default Interface;
module.exports={Interface:Interface};