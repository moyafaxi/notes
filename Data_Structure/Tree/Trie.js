const LinkedListMap = require('../map/linkedListMap').LinkedListMap;

class Node {
    constructor(isWord) {
        this.isWord = isWord || false;
        this.next = new LinkedListMap(); // 当前节点所有字符对应后续节点的映射
    }
}

/**
 * 字典树
 */
class Trie {
    constructor() {
        this.root = new Node();
        this.size = 0; // 存储单词的个数
    }

    //获取trie中存储的字符串个数
    getSize() {
        return this.size;
    }

    //添加一个新的字符串
    add(word) {
        if(typeof word != 'string') {
            throw new Error("illeagle param");
        }
        let cur = this.root;
        for(let i=0; i<word.length; i++) {
            let c = word.charAt(i);
            if(cur.next.get(c) == null) { //如果c字符没有指向下一个节点，则新建一个基点插入
                cur.next.add(c, new Node());
            }
            cur = cur.next.get(c);
        }
        if(!cur.isWord) { //字符串未添加情况下
            cur.isWord = true;
            this.size++;
        } 
    }

    //查看单词word是否存在trie中
    contains(word) {
        let cur = this.root;
        for(let i=0; i<word.length; i++) {
            let c = word.charAt(i);
            if(cur.next.get(c) == null) { //如果c字符没有指向下一个节点，则单词不存在
                return false
            }
            cur = cur.next.get(c);
        };

        return cur.isWord;
    }

    // 查询trie中是否有单词以prefix为前缀的单词 ( 单词本身可以看作自己的前缀 )
    isPrefix(prefix) {
        let cur = this.root;
        for(let i=0; i<prefix.length; i++) {
            let c = prefix.charAt(i);
            if(cur.next.get(c) == null) { //如果c字符没有指向下一个节点，则单词不存在
                return false
            }
            cur = cur.next.get(c);
        };

        return true;
    }
}


let trie = new Trie();

trie.add('qwuehiquwe');
console.log("==============================");
console.log(trie.isPrefix('qwo'));