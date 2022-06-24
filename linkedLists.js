function LinkNode(value){
    this.value = value
    this.next = null
}

class LinkedList{
    constructor(head){
        head = new LinkNode(head)
        this.head = head
        this.tail = this.head
        this.length = 1
    }

    append(value){
        let newNode = new LinkNode(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value){
        let newNode = new LinkNode(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this
    }

    traverseToIndex(index){
        let count = 0
        let currentNode = this.head
        while(count != index){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode
    }

    viewList(){
        const arr = []
        while(this.head){
            arr.push(this.head.value)
            this.head = this.head.next
        }
        return arr
    }

    insertEl(index, value){
        let newNode = new LinkNode(value);
        if(this.length < index){
            return this.append(value)
        }
        let prevNode = this.traverseToIndex(index-1);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++
        return this
    }
}

const myLinkedList = new LinkedList(5)

myLinkedList.append(8)
myLinkedList.append(1)
myLinkedList.append(4)
myLinkedList.prepend(1)
myLinkedList.prepend(8)
myLinkedList.insertEl(1, 87)
console.log(myLinkedList.viewList())
