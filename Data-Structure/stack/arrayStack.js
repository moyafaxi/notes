/*
    interface ArrSet{
        function push();
        function pop();
        function peek();
        function getSize();
        function isEmpty();
    }
*/
class ArrayStack { // 基于数组实现
    /**
     * 构造函数 初始化调用
     */
    constructor(){
        this.data = new Array();
    }

    /**
     * 入栈操作
     * @param {*} el 
     */
    push(el) {
        this.data.push(el)
    }

    /**
     * 出栈操作
     * @param {*} el 
     */
    pop(el) {
        return this.data.shift(el)
    }

    /**
     * 查看栈顶元素
     */
    peek() {
        return this.data[this.data.length-1]
    }

    /**
     * 获取栈的大小
     */
    getSize() {
        return this.data.length
    }

    /**
     * 查看栈是否为空
    */
    isEmpty() {
        for(let i=0; i<this.data.length; i++) {
            if(this.data[i]){
                return false
            }
        };
        return true;
    }
}



let arrayStack = new ArrayStack();

module.exports = {ArrayStack: ArrayStack}

// let test = [1,2,3,4,5];

// test.forEach(item=>{
//     arrayStack.push(item);
// })

// console.log(arrayStack.isEmpty());