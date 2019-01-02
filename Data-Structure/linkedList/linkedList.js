/*
   interface MaxHeap{
        function getSize();
        function isEmpty();
        function addFirst();
        function add();
        function addLast();
        function get();
        function getFirst();
        function getLast();
        function set();
        function contains();
        function remove();
        function removeFirst();
        function removeLast();
        function order();
   }
*/

class Node { // 节点类 (应该作为内部类，但是Js目前不支持)
    /**
     * @param {*} el 
     * @param {Node} next 
     */
    constructor(el, next) {
        this.node = el;
        this.next = next || null;
    }
}

class LinkedList { // 增加虚拟头节点
    constructor() {
        this.dummyHead = new Node(null, null);
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }
    

    /**
     * 链表头添加元素
     * @param {*} el 
     */
    addFirst(el) {
        this.add(el, 0);
    }

    /**
     * 指定索引处添加元素
     * @param {*} el 
     * @param {Number} idx 
     */
    add(el, idx) {
        let prev = this.dummyHead;
        for(let i=0; i<idx-1; i++) {
            prev = prev.next;
        }
        prev.next = new Node(el, prev.next);
        this.size++;
    }

    /**
     * 链表尾添加元素
     * @param {*} el 
     */
    addLast(el) {
        this.add(el, this.size-1)
    }

    /**
     * 获取链表中指定索引的值
     * @param {Number} idx
    */
    get(idx) {
        if(idx<0 || idx>this.size) {
            throw new Error("illegal argument");
        }
        let cur = this.dummyHead.next;
        for(let i=0; i<idx; i++) {
            cur = cur.next;
        }
        return cur.node
    }

    getFirst() {
        return this.get(0);
    }

    getLast() {
        return this.get(this.size-1);
    }

    /**
     * 修改链表中指定索引的值
     * @param {*} el
     * @param {Number} idx
     * 
     */
    set(el, idx) {
        if(idx<0 || idx>this.size) {
            throw new Error("illegal argument");
        }
        let cur = this.dummyHead.next;
        for(let i=0; i<idx; i++) {
            cur = cur.next;
        }
        cur.node = el
    }

    /**
     * 链表中是否包含某个值
     * @param {*} el 
     * @return {Boolean}
     */
    contains(el) {
        let cur = this.dummyHead.next;
        for(let i=0; i<this.size; i++) {
            if(cur.node === el){
                return true;
            }
            cur = cur.next; 
        }
        return false;
    }

    /**
     * 删除指定索引处元素
     * @param {Number} idx  
     */

    remove(idx) {
        let prev = this.dummyHead.next;
        for(let i=0; i<idx-1; i++) {
            prev = prev.next;
        };
        let retNode = prev.next;
        prev.next = retNode.next;
        retNode.next = null;
        this.size--;

        return retNode.node;
    }

    removeFirst() {
        this.remove(0);
    }

    removeLast() {
        this.remove(this.size-1);
    }

    order() { // 遍历
        let cur = this.dummyHead.next;
        for(let i=0; i<this.size; i++) {
            console.log(cur.node);
            cur = cur.next;
        }
    }
}



let linkedList = new LinkedList();
linkedList.addFirst(1);
linkedList.addFirst(2);
linkedList.addFirst(3);

module.exports={
    LinkedList: LinkedList
}

console.log("============");
// linkedList.order()
console.log("============");