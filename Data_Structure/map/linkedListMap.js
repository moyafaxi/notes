/*
   interface Map {
        function getSize();
        function isEmpty();
        function add();
        function get();
        function contains();
        function remove();
   }
*/

class Node { // 节点类 (应该作为内部类，但是Js目前不支持)
    /**
     * @param {*} el 
     * @param {Node} next 
     */
    constructor(k, v, next) {
        this.key = k || null;
        this.value = v || null;
        this.next = next || null;
    }
}

class LinkedListMap { // 基于链表实现
    constructor() {
        this.dummyHead = new Node(null, null);
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size == 0;
    }

    _getNode(k) {
        let cur = this.dummyHead.next;
        while(cur != null){
            if(cur.key == k) {
                return cur;
            }
            cur = cur.next;
        }

        return null;
    }

    contains(k) {
        return this._getNode(k) != null;
    }

    get(k) {
        return this._getNode(k) ? this._getNode(k).value : null;
    }

    add(k, v) {
        if(this._getNode(k) == null) {
            this.dummyHead.next = new Node(k, v, this.dummyHead.next);
            this.size++;
        }else {
            throw new Error("key is exist")
        }  
    }

    set(k, v) {
        if(this._getNode(k) == null) {
            throw new Error("key isn't exist")
        }
        node.value = v;
    }

    remove(k) {
        let prev = this.dummyHead;
        while(prev.next != null) {
            if(prev.next.k == k) {
                break;
            }
            prev.next = prev;
        }

        if(prev.next != null) {
            let delNode = prev.next;
            prev.next = delNode.next;
            delNode.next = null;
            return delNode.value;
        }
    }
}

module.exports = { LinkedListMap: LinkedListMap };

let linkedListMap = new LinkedListMap();

linkedListMap.add(1,  5);
linkedListMap.add(2,  10);

console.log(linkedListMap.get(1));