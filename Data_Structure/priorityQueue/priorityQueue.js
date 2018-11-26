/*
    interface PriorityQueue{ 和普通队列实现api一样
        function isEmpty();
        function getSize();
        function enqueue();
        function dequeue();
        function getfront();
    }
*/

const MaxHeap = require('../heap/maxHeap.js').MaxHeap;
class PriorityQueue { // 基于大根堆实现
    constructor() {
        this.data = new MaxHeap();
    }

    isEmpty() {
        return this.data.isEmpty();
    }

    getSize() {
        return this.data.getSize();
    }

    enqueue(e) {
        this.data.add(e);
    }

    dequeue() {
        this.data.extractMax();
    }

    getfront() {
        return this.data.findMax();
    }
}


let priorityQueue = new PriorityQueue();

priorityQueue.enqueue(5);
priorityQueue.enqueue(2);
priorityQueue.enqueue(10);



console.log(priorityQueue);