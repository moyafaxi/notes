/**
 * quick find (find时间复杂度 O(1),  union时间复杂度 O(n))
 */
class UnionFind1 {
    constructor(capacity) {
        if(typeof capacity != 'number'){
            throw new Error("param isn't a number");
        }
        this.id = new Array(capacity);
        for(let i=0; i<this.id.length; i++) {
            this.id[i] = i;
        }
    }

    getSize() {
        return this.id.length;
    }

    //查找元素p对应的集合编号
    _find(p) {
        return this.id[p];
    }

    isConnected(p, q) {
        return this._find(p) == this._find(q);
    }

    unionElements(p, q) {
        let pId = this._find(p);
        let qId = this._find(q);

        if(pId == qId) {
            return;
        }

        for(let i=0; i<this.id.length-1; i++) {
            if(id[i] == pId) {
                id[i] = qId;
            }
        }
    }
}



/**
 * quick union (union时间复杂度 O(h) h为元素所在树的深度)
 */

class UnionFind2 {
    constructor(capacity) {
        if(typeof capacity != 'number'){
            throw new Error("param isn't a number");
        }
        this.parent = new Array(capacity);
        for(let i=0; i<this.parent.length; i++) {
            this.parent[i] = i;
        }
    }

    getSize() {
        return this.parent.length;
    }


    //查找过程，查找元素p对应的集合编号
    //O(h)的复杂度，h为树的高度
    _find(p) {
        while(p != parent[p])
            p = parent[p];
        return p
    }


    isConnected(p, q) {
        return this._find(p) == this._find(q);
    }


    unionElements(p, q) {
        let pRoot = this._find(p);
        let qRoot = this._find(q);

        if(pRoot == qRoot) {
            return;
        }
        
        //让p所在树的根节点指向q所在树的根节点
        this.parent[pRoot] = qRoot;
    }
}