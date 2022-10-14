class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isPalindrome() {
    // No node
    if (this.head === null){
        return null
    }

    // One node
    if (this.head === this.tail){
        return true
    }

    // More than 1 node
    var f = this.head;
    var b = this.tail;

    while(f != b && b.next != f){
        if (f.data != b.data){
            return false
        } else {
            f = f.next;
            b = b.prev;
        }
    }
    return true
}

    reverse() {
        var temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        return this
    }

// push to head
    addHead(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;

            // this.tail.next = node;
            // node.prev = this.tail;
            // this.tail = node;
        }
    }
}

// instantiate the DLL()
var myCoolDLL = new DLList();

// add a few DLLNodes:
myCoolDLL.addHead(new DLLNode("d"))
myCoolDLL.addHead(new DLLNode("c"))
myCoolDLL.addHead(new DLLNode("b"))
myCoolDLL.addHead(new DLLNode("a"))
// console.log(myCoolDLL);
// ---- test new methods:
// console.log(myCoolDLL.isPalindrome())
myCoolDLL.reverse();
console.log(myCoolDLL);