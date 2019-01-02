/*
    interface ArrSet{
        function push();
        function pop();
        function peek();
        function getSize();
        function isEmpty();
    }
*/

const LinkedList = require('../linkedList/linkedList.js').LinkedList;

class LinkedListStack { // 基于链表实现
    constructor() {
        this.data = new LinkedList();
    }

    push(el) {
        this.data.addFirst(el);
    }

    pop() {
        return this.data.removeLast();
    }

    peek() {
        return this.data.getFirst();
    }

    getSize() {
        return this.data.getSize();
    }

    isEmpty() {
        return this.data.isEmpty();
    }
    
    order() {
        this.data.order();
    }
}

let linkedListStack = new LinkedListStack();

let test = [1, 2, 3, 4, 5];

test.forEach(item=>{
    linkedListStack.push(item);
});

linkedListStack.order();