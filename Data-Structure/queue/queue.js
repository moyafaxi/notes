/*
    interface PriorityQueue{ 和普通队列实现api一样
        function isEmpty();
        function getSize();
        function enqueue();
        function dequeue();
        function getfront();
    }
*/

class Queue {
    constructor() {
        this.data = new Array();
    }

    // 入队
    enqueue(el) {
        this.data.unshift(el)
    }

    // 出队
    dequeue() {
        return this.data.pop();
    }

    // 获取队首的元素
    getFront() {
        return this.data[0] 
    }

    // 获取队列的长度
    getSize() {
        return this.data.length;
    }

    // 判断队列是否为空
    isEmpty() {
        for(let i=0; i<this.data.length; i++) {
            if(this.data[i]){
                return false
            }
        };
        return true;
    }
};

module.exports = {Queue: Queue};

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);

queue.dequeue();

console.log(queue.getFront());





