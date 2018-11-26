/*
    interface BST{
        function getSize();

        function add();
        function _addNode();

        function contains();
        function _contains();

        function preOrder();
        function _preOrder();

        function preOrderNR();

        function inOrder();
        function _inOrder();

        function postOrder();
        function _postOrder();

        function sequenceOrder();
        function _sequenceOrder();

        function findMax();
        function _findMax();

        function findMin();
        function _findMin();

        function removeMin();
        function _removeMin();

        function removeMax();
        function _removeMax();

        function remove();
        function _remove();   
    }
*/

const Stack = require('../stack/arrayStack.js').ArrayStack;
const Queue = require('../queue/queue.js').Queue;

class Node { // 节点类
    constructor(e, left, right) {
        this.val = e;
        this.left = left || null;
        this.right = right || null;
    }
}

class BST { //二分搜索树
    constructor() {
        this.root = null;
        this.size = 0;
    }
    
    getSize() {
        return this.size;
    }

    // 向树中添加元素
    add(el) {
        this.root = this._addNode(this.root, el); 
    }

    _addNode(node, e) { // 重复元素视作已存在  递归函数
        if(node == null) {
            this.size++;
            return new Node(e);
        }
        if(e < node.val) {
            node.left = this._addNode(node.left, e);
        }else if(e > node.val) {
            node.right = this._addNode(node.right, e);
        }
        return node;
    }

    // 检查元素是否存在树中
    contains(el) {
        return this. _contains(this.root, el);
    }

    _contains(node, e) { // 递归函数
        if(node == null) { // 递归终止条件 不存在
            return false;
        }
        if(node.val == e) { // 递归终止条件 存在
            return true;
        }
        if(e < node.val) {
            return this._contains(node.left, e); // 层层返回递归的结果
        }else if(e > node.val) {
            return this._contains(node.right, e);
        }
    } 
    
    // 前序遍历
    preOrder() {
        this._preOrder(this.root);
    }

    _preOrder(node) { // 遍历递归函数
        if(node == null) {
            return;
        }
        console.log(node.val);
        this._preOrder(node.left);
        this._preOrder(node.right);
    }

    // 前序遍历非递归写法
    preOrderNR() { // 利用栈的特性
        let stack = new Stack();
        stack.push(this.root);
        while(!stack.isEmpty()) {
            let cur = stack.pop();
            console.log(cur.val);
            if(cur.left)
                stack.push(cur.left);
            if(cur.right)
                stack.push(cur.right);       
        }
    }

    // 中序遍历
    inOrder() {
        this._inOrder(this.root);
    }

    _inOrder(node) {
        if(node == null) {
            return;
        }
        this._inOrder(node.left);
        console.log(node.val);
        this._inOrder(node.right);
    }

    // 后序遍历
    postOrder() {
        this._postOrder(this.root);
    }

    _postOrder(node) {
        if(node == null) {
            return;
        }
        this._postOrder(node.left);
        this._postOrder(node.right);
        console.log(node.val);
    }
    
    // 层序遍历
    sequenceOrder() { // 广度优先遍历 能更快的找到问题的解 属于一种搜索策略
        this._sequenceOrder(this.root);
    }

    _sequenceOrder(node) { // 借助队列实现
        console.log("========================= 分割线 ===============================");
        let queue = new Queue();
        queue.enqueue(node);

        while(!queue.isEmpty()) { // 循环入队
            let cur = queue.dequeue();
            console.log(cur.val)
            if(cur.left)
                queue.enqueue(cur.left);
            if(cur.right)
                queue.enqueue(cur.right);
        }
    }
    
    findMax() { // 调用时无需传参 对外屏蔽内部实现
        return this._findMax(this.root);
    }
    
    _findMax(node) { // 往右子树找就完事了
        if(node.right == null) {
            return node.val;
        };
        return this._findMax(node.right);
    }

    findMin() { // 查找树中最小的元素
        return this._findMin(this.root);
    }

    _findMin(node) {
        if(node.left == null) {
            return node.val;
        }
        return this._findMin(node.left);
    }
    
    //从二分搜索树中返回最小值所在节点
    removeMin() {
        let ret = this.findMin();
        this.root = this._removeMin(this.root);
        return ret;
    }

    //删除以node节点为根的二分搜索树中的最小节点
    //返回删除节点后新的二分搜素树的根
    _removeMin(node) {
        if(node.left == null) {
            let rightNode = node.right;
            node.right = null;
            this.size--;
            return rightNode;
        }

        node.left = this._removeMin(node.left);
        return node;
    }


    //从二分搜索树中返回最大值所在节点
    removeMax() {
        let ret = this.findMax();
        this.root = this._removeMax(this.root);
        return ret;
    }

    //删除以node节点为根的二分搜索树中的最小节点
    //返回删除节点后新的二分搜素树的根
    _removeMax(node) {
        if(node.right == null) {
            let leftNode = node.left;
            node.left = null;
            this.size--;
            return leftNode;
        }

        node.right = this._removeMax(node.right);
        return node;
    }

    //从二分搜索树中删除任意元素
    remove(e) {
        this.root = this._remove(this.root, e);
    }

    //删除以node为节点的树中值为e的元素
    _remove(node, e) {
        if(e < node.val) {
            node.left = this._remove(node.left, e);
            return node;
        }else if(e > node.val) {
            node.right = this._remove(node.right, e);
            return node;
        }else{ // e == node.val
            if(node.left == null) { // 左子树为空情况下
                let rightNode = node.right;
                node.right = null;
                return rightNode;
            }
            if(node.right == null) { // 右子树为空情况下
                let leftNode = node.left;
                node.left = null;
                return leftNode;
            }

            // 左右子树都不为空情况下
            let successor = this._findMin(node.right);
            successor.right = this._removeMin(node.right);
            successor.left = node.left;

            node = null;

            return successor;
        }
    }
}
module.exports = {
    BST: BST
}

//测试
let bst = new BST();

bst.add(50);
bst.add(4);
bst.add(6);
bst.add(10);
bst.add(120);
bst.add(80);

    //       树结构
    //
    //         50
    //       /    \
    //      4      120  
    //       \     /
    //        6   80  
    //         \
    //          10

console.log("======================================");
console.log("======================================");
bst.inOrder()