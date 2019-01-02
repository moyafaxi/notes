/*
   interface MaxHeap{
        function isEmpty();
        function getSize();
        function rightChild();
        function add();
        function findMax();
        function extractMax();
        function replace();
        function maxHeapify();

        private function _parent();
        private function _leftChild();
        private function _siftUp();
        private function _swap();
        private function _siftDown();
   }
*/

class MaxHeap { // 大根堆
    constructor() { // 基于js数组实现
        this.data = new Array();
    }

    getSize() {
        return this.data.length;
    }

    isEmpty() {
        for(let i=0; i<this.data.length; i++) {
            if(this.data[i]) {
                return false;
            }
        }
        return true;
    }

    // 寻找索引为idx的节点的父节点的索引
    _parent(idx) {
        if(idx == 0)
            throw new Error("index-0 is not have parent");
        return Math.floor((idx-1)/2);
    }

    _leftChild(idx) {
        return 2*idx + 1;
    }

    rightChild(idx) {
        return 2*idx + 2;
    }

    // 添加元素
    add(e) {
        this.data.push(e);
        this._siftUp(this.getSize() - 1);
    }

    //元素上浮
    _siftUp(idx) {
        while(idx>0 && this.data[idx] > this.data[this._parent(idx)]) {
            this._swap(idx, this._parent(idx));
            idx = this._parent(idx);
        }
    }
    
    //交换元素
    _swap(i, j) {
        let temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    }

    findMax() {
        return this.data[0];
    }

    //取出堆中最大值
    extractMax() {
        let ret = this.findMax();
        this._swap(0, this.getSize()-1);
        this.data.pop();
        this._siftDown(0);
        return ret;
    }

    _siftDown(k) { // 元素的下沉
        while(this._leftChild(k) < this.getSize()) { // 左孩子还未越界时 进行循环
            let j = this._leftChild(k);
            if(j+1 < this.getSize() && this.data[j+1] > this.data[j]) // 取左右孩子中较大值与节点作比较
                j = j+1
            if(this.data[k] < this.data[j]) // 如果节点值小于左右孩子中的较大者则与较大者交换位置,继续循环
                this._swap(k, j);
                k = j;
        }
    }

    //替换堆中的最大值
    replace(e) {
        let ret = this.findMax();
        this.data[0] = e;
        this._siftDown(0);
        return ret;
    }

    maxHeapify(arr) { // 算法复杂度为O(n)  另一种思路循环数组一个个add 复杂度为O(nlogn)
        this.data = arr;
        for(let i=this._parent(this.getSize()-1); i>=0; i--) {
            this._siftDown(i);
        }
    }
}

module.exports = {
    MaxHeap: MaxHeap
}

// let heap = new MaxHeap();

// let test = [5, 1, 3, 2, 7, 10];

// heap.maxHeapify(test)
// console.log(heap);