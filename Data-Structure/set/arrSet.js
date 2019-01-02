/*
    interface ArrSet{
        function isEmpty();
        function getSize();
        function add();
        function remove();
        function contains();
    }
*/

class ArrSet {
    constructor() {
        this.data = new Array();
    }

    getSize() {
        return this.data.length;
    }

    isEmpty() {
        for(let i=0; i++; i<this.getSize()-1) {
            if(this.data[i]) {
                return false;
            }
        }
        return true;
    }

    add(e) {
        if(!this.data.includes(e)) { // 不存在才添加
            this.data.push(e)
        }
    }

    remove(e) {
        let idx = this.data.indexOf(e);
        if(idx > -1) {
            this.data.splice(idx, 1);
        }
    }

    contains(e) {
        if(this.data.includes(e)) {
            return true;
        }
        return false;
    }
}


let set = new ArrSet();
let test = [5,5,2,1,8,4, 1];

test.forEach(item=>{
    set.add(item);
})
set.remove(5);
console.log("=========== 分割线 ==================")
console.log(set);