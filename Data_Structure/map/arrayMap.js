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


class ArrayMap {
    constructor() {
        this.data = new Array();
    }

    getSize() {
        return this.data.length;
    }

    isEmpty() {
        for(let i=0; i<this.getSize()-1; i++) {

        }
    }
}