/**
 * 线段树
 */
class SegmentTree {
    constructor(arr, merger) {
        this.data = arr;
        this.tree = new Array();
        this.merger = merger;
        this._buildSegmentTree(0, 0, this.data.length-1);
    }

    getSize() {
        return arr.length;
    }

    get(idx) {
        return this.data[idx];
    }

    _leftChild(idx) {
        return 2*idx + 1; 
    }

    _rightChild(idx) {
        return 2*idx + 2;
    }

    //在treeIndex的位置创建表示区间为[l, r]的线段树
    _buildSegmentTree(treeIndex, l, r) {
        if(l == r) {
            this.tree[treeIndex] = this.data[l];
            return;
        }

        let leftTreeIndex = this._leftChild(treeIndex);
        let rightTreeIndex = this._rightChild(treeIndex);

        let mid = l + Math.floor((r-l)/2);

        this._buildSegmentTree(leftTreeIndex, l, mid);
        this._buildSegmentTree(rightTreeIndex, mid+1, r);

        this.tree[treeIndex] = this.merger(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
    }

    //返回区间[l, r]的值
    query(queryL, queryR) {
        
        return this._query(0, 0, this.data.length-1, queryL, queryR);
    }

    _query(treeIndex, l, r, queryL, queryR) {
        if(l == queryL && r == queryR) {
            return this.tree[treeIndex];
        }

        let leftTreeIndex = this._leftChild(treeIndex);
        let rightTreeIndex = this._rightChild(treeIndex);

        let mid = l + Math.floor((r-l)/2);

        if(queryL >= mid+1) { // 结果落在右边
            return this._query(rightTreeIndex, mid+1, r, queryL, queryR);
        }else if(queryR <= mid){ // 结果落在左边
            return this._query(leftTreeIndex, l, mid, queryL, queryR);
        }
        
        let leftResult = this._query(leftTreeIndex, l, mid, queryL, mid);
        let rightResult = this._query(rightTreeIndex, mid+1, r, mid+1, queryR);

        return this.merger(leftResult, rightResult);
    }
}

let test = [1, 3, 5, 6, 8];
let segmentTree = new SegmentTree(test, (a, b)=>{
    return a + b;
});

console.log(segmentTree.query(0, 1));
console.log(segmentTree.tree);