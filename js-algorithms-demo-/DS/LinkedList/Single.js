class Node {

    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);

        if(!this.head) {
            this.head = this.tail = newNode;
        } else {

            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length ++;

        return this;

    }

    pop() {
        if(this.length == 0) return null;
        let removed = null;
        if(this.length == 1) {
            removed = this.tail;
            this.head = this.tail = null;
        } else {
            let prev = this.head;
            let current = prev;
            while(current.next) {
                prev = current;
                current = current.next;
            }
            removed = current;
            prev.next = null;
            this.tail = prev;
        }

        this.length --;
        return removed;

    }

    unshift(val) {

        var newNode = new Node(val);
        if(this.length == 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if(this.length == 0) return null;
        let removed = null;
        if(this.length == 1) {
            removed = this.head;
            this.head = this.tail = null;
        } else {
            removed = this.head;
            this.head = this.head.next;
        }
        this.length --;
        return removed;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let counter = 1;
        let current = this.head;
        while(counter <= index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index,val) {

        let nodeToSet = this.get(index);
        if(nodeToSet) {
            nodeToSet.data = val;
        }
        return nodeToSet;
    }

    insert(pos,val) {
        if(pos < 0 || pos > this.length) return false;

        let newNode = new Node(val);

        if(pos == 0) {
            return !!this.unshift(val);
        } else if(pos == this.length) {
            return !!this.push(val);
        } else {
            let prev = this.get(pos -1);
            newNode.next = prev.next;
            prev.next = newNode;
            this.length++;
            return true;
        }
    }

    remove(pos) {
        if(pos < 0 || pos > this.length - 1) return null;

        if(pos == 0) return this.shift();
        else if(pos == this.length -1) return this.pop();
        else {
            let prev = this.get(pos - 1);
            let removed = prev.next;
            prev.next = removed.next;
            this.length --;
            return removed;
        }
    }

    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.data);
            current = current.next;
        }

        return arr.join(" -> ");
    }


    reverse() {

       let prev = null , next;
       let temp = this.head;  
       this.head = this.tail;
       this.tail = temp;

       for(let i = 0; i< this.length ; i++) {
           next = temp.next;
           temp.next = prev;
           prev = temp;
           temp = next;
       }
       return this;

    }



}
console.log("hello")