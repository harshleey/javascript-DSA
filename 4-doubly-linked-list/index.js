class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // GOAL: Add to the end of the list
  push(value) {
    // Create a new node with value
    // If there is no head, set head and tail to new node
    // Else, set old tail next to new node
    // Set new node's prev to old tail
    // Set new node as tail
    // Increase length by 1

    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (this.length == 0) return undefined;

    let lastElement = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
    lastElement.prev = null;
    this.length--;

    return lastElement;
  }

  unshift(value) {
    // The new node's next is the current head
    // The current head's prev is the new Node

    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    }

    newNode.next = this.head; // Set the new Node's next to the old head
    this.head.prev = newNode; // Set the old head's prev to new Node
    this.head = newNode; // Set the new Node as the new head
    this.length++;

    return this;
  }

  shift() {
    // Remove the first (head)
    // Set the used to be second node's prev as null
    // Set the used to be second node as head

    if (this.length == 0) return undefined;

    let nodeToDelete = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.head = this.head.next;
    this.head.prev = null;
    nodeToDelete.next = null;
    this.length--;

    return nodeToDelete;
  }

  //   switch() {
  //     if (this.length == 0) return undefined;

  //     let current = this.head;
  //     let last = this.tail;
  //     let prev = this.tail

  //     while (current.next) {
  //         if () {}

  //         prev = current;
  //         current = prev.next;
  //     }

  //   }
}

const doublyLinkedList = new DoublyLinkedList(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(3);
doublyLinkedList.push(4);
doublyLinkedList.push(5);
doublyLinkedList.push(6);
// console.log(doublyLinkedList);
// console.log(doublyLinkedList.pop());
console.log(doublyLinkedList);
doublyLinkedList.reverse();
console.log(doublyLinkedList);
