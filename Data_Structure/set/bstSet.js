/*
    interface BSTSet{
        function isEmpty();
        function getSize();
        function add();
        function remove();
        function contains();
    }
*/
const BST = require('../Tree/BST').BST;
class BSTSet { //基于二分搜索树实现
    constructor() {
        this.data = new BST();
    }

    isEmpty() {
        return this.data.isEmpty();
    }

    getSize() {
        return this.data.getSize();
    }

    add(e) {
        this.data.add(e);
    }

    remove(e) {
        this.data.remove(e);
    }

    contains(e) {
        return this.data.contains(e);
    }

    order() {
        this.data.inOrder();
    }
}

let set = new BSTSet();
let test = [5,5,2,1,8,4, 1];

test.forEach(item=>{
    set.add(item);
})
console.log("=========== 分割线 ==================")
console.log(set.order());