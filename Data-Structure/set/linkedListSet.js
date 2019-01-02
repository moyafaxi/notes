const LinkedList = require('../linkedList/linkedList').LinkedList;

/*
    interface LinkedListSet{
        function isEmpty();
        function getSize();
        function add();
        function remove();
        function contains();
        function order();
    }
*/
class LinkedListSet {
    constructor() {
        this.data = new LinkedList;
    }

    isEmpty() {
        return this.data.isEmpty();
    }

    getSize() {
        return this.data.getSize();
    }

    add(e) {
        if(!this.data.contains(e)) {
            this.data.add(e)
        }
    }

    remove(e) {
        return this.data.remove(e);
    }

    contains(e) {
        return this.data.contains(e);
    }

    order() {
        this.data.order();
    }
}


let set = new LinkedListSet();
let test = [5,5,2,1,8,4, 1];

test.forEach(item=>{
    set.add(item);
})

console.log("=========== 分割线 ==================")
set.order()