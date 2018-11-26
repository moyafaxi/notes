const Stack = require('../stack/arrayStack.js').ArrayStack;
const Queue = require('../queue/queue.js').Queue;

class Node { // 节点类
    constructor(e, left, right) {
        this.val = e;
        this.left = left || null;
        this.right = right || null;
        this.height = 1;
    }
}

class AVLTree { //二分搜索树
    constructor() {
        this.root = null;
        this.size = 0;
    }
    
    getSize() {
        return this.size;
    }

    // 判断二叉树是否为平衡的二叉树
    isBalance() {
        return this._isBalance(this.root);
    }

    _isBalance(node) {
        if(node == null) {
            return true;
        }
        let balanceFactor = this._getBalanceFactor(node);
        if(Math.abs(balanceFactor) > 1) {
            return false;
        }else {
            return this._isBalance(node.left) && this._isBalance(node.right);
        }
        
    }
    // 获得节点node的平衡因子
    _getBalanceFactor(node) {
        if(node == null) {
            return 0
        }
        return this._getHeight(node.left) - this._getHeight(node.right);
    }
    // 获得节点node的高度
    _getHeight(node) {
        if(node == null) {
            return 0;
        }
        return node.height;
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

        // 更新node节点height值
        node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

        let balanceFactor = this._getBalanceFactor(node);
        
        // 维护树的平衡性

        //LL
        if(Math.abs(balanceFactor) > 1 && this._getBalanceFactor(node.left) >= 0) {
            return this._rightRotate(node);
        }

        //RR
        if(Math.abs(balanceFactor) < -1 && this._getBalanceFactor(node.right) <= 0) {
            return this._leftRotate(node);
        }

        //LR
        if(Math.abs(balanceFactor) > 1 && this._getBalanceFactor(node.left) < 0) {
            node.left = this._leftRotate(node.left);
            return this._rightRotate(node);
        }

        //RL
        if(Math.abs(balanceFactor) < -1 && this._getBalanceFactor(node.right) <= 0) {
            node.right = this._rightRotate(node.right);
            return this._leftRotate(node);
        }
        return node;
    }
    //        y                            x     
    //       / \                         /   \ 
    //      x   T4                      z     Y
    //     / \         --------- >     / \    / \ 
    //    z   T3                      T1  T2 T3  T4
    //   / \
    //  T1  T2
    // 对节点y进行右旋转操作, 返回旋转后的新的根节点
    _rightRotate(y) {

        let x = y.left;
        let T3 = x.right;

        x.right = y;
        y.left = T3;

        y.height = Math.max(this._getHeight(y.left), this._getHeight(y.right)) + 1;
        x.height = Math.max(this._getHeight(x.left), this._getHeight(x.right)) + 1;

        return x;   
    }


    // 对节点y进行左旋转操作, 返回旋转后的新的根节点
    _leftRotate(y) {

        let x = y.right;
        let T2 = x.left;

        x.left = y;
        y.right = T2;

        y.height = Math.max(this._getHeight(y.left), this._getHeight(y.right)) + 1;
        x.height = Math.max(this._getHeight(x.left), this._getHeight(x.right)) + 1;

        return x;
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
        let retNode = null;
        if(e < node.val) {
            node.left = this._remove(node.left, e);
            retNode = node;
        }else if(e > node.val) {
            node.right = this._remove(node.right, e);
            retNode = node;
        }else{ // e == node.val
            if(node.left == null) { // 左子树为空情况下
                let rightNode = node.right;
                node.right = null;
                retNode = rightNode;
            }else if(node.right == null) { // 右子树为空情况下
                let leftNode = node.left;
                node.left = null;
                retNode = leftNode;
            }else {
                // 左右子树都不为空情况下
                let successor = this._findMin(node.right);
                successor.right = this._remove(node.right, successor);
                successor.left = node.left;

                node = null;

                retNode = successor;
            }

            if(retNode == null) {
                return null;
            }
            // 更新node节点height值
            retNode.height = 1 + Math.max(this._getHeight(retNode.left), this._getHeight(retNode.right));

            let balanceFactor = this._getBalanceFactor(retNode);
            // 维护树的平衡性

            // LL
            if(Math.abs(balanceFactor) > 1 && this._getBalanceFactor(retNode.left) >= 0) {
                return this._rightRotate(retNode);
            }

            //RR
            if(Math.abs(balanceFactor) < -1 && this._getBalanceFactor(retNode.right) <= 0) {
                return this._leftRotate(retNode);
            }

            //LR
            if(Math.abs(balanceFactor) > 1 && this._getBalanceFactor(retNode.left) < 0) {
                retNode.left = this._leftRotate(retNode.left);
                return this._rightRotate(retNode);
            }

            //RL
            if(Math.abs(balanceFactor) < -1 && this._getBalanceFactor(retNode.right) <= 0) {
                retNode.right = this._rightRotate(retNode.right);
                return this._leftRotate(retNode);
            }
            return retNode;
        }
    }
}
module.exports = {
    AVLTree: AVLTree
}

//测试
let avlTree = new AVLTree();
console.log("======================================");
avlTree.add(4);
avlTree.add(6);
avlTree.add(3);
avlTree.add(2);
avlTree.add(1);

avlTree.remove(3);

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
avlTree.inOrder();
console.log(avlTree.isBalance());