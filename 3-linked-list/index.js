// Node
class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

// LinkedList
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {}
}

// My LinkedList
// const myNode = new Node(2);
const myLinkedList = new LinkedList(1);
// myLinkedList.push(2);
// myLinkedList.push(3);
// myLinkedList.push(4);
// myLinkedList.push(5);
console.log(myLinkedList);
console.log(myLinkedList.pop());
console.log(myLinkedList.pop());
console.log(myLinkedList.pop());
// myLinkedList.pop();
// console.log(myLinkedList);
