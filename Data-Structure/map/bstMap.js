class Node {
    constructor(k, v, left, right) {
        this.k = k;
        this.v = v;
        this.left = left || null;
        this.right = right || null;
    }
}
class BstMap {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size == 0;
    }

    // 向映射中添加元素
    add(k, v) {
        this.root = this._addNode(this.root, k, v); 
    }

    _addNode(node, k, v) { // 重复元素视作已存在  递归函数
        if(node == null) {
            this.size++;
            return new Node(k, v);
        }
        if(k < node.k) {
            node.left = this._addNode(node.left, k, v);
        }else if(k > node.k) {
            node.right = this._addNode(node.right, k, v);
        }else{
            node.v = v;
        }
        return node;
    }

    //返回以Node为根节点的子树中, k所在的节点
    _getNode(node, k) {
        if(node == null) {
            return null;
        }

        if(k == node.k) {
            return node;
        }else if(k > node.k) {
            return this._getNode(node.right, k);
        }else{
            return this._getNode(node.left, k);
        }
    }

    // 检查元素是否存在映射中
    contains(k) {
        return this. _getNode(this.root, k) != null;
    }


    get(k) {
        return this._getNode(this.root, k) ? this._getNode(this.root, k).v : null;
    }

    //更新映射中节点的值
    set(k, v) {
        this._getNode(this.root, k).v = v;
    }



    //从映射中删除任意元素
    remove(k) {
        this.root = this._remove(this.root, k);
    }

    //删除以node为节点的树中k所对应的元素
    _remove(node, k) {
        if(k < node.k) {
            node.left = this._remove(node.left, k);
            return node;
        }else if(k > node.k) {
            node.right = this._remove(node.right, k);
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

let bstMap = new BstMap();

bstMap.add(1, 'wangrui');
bstMap.add(2, 'daiyufei');
bstMap.remove(1);

console.log(bstMap);