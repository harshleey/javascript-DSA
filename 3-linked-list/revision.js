class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1; // Length is 1 by default cause I must add a value when instantiating the LinkedList class
  }

  // GOAL: Add a new Node (with the value) to the end
  push(value) {
    // if there is no head in the list before adding, set the new node as head and tail
    //  otherwise (if there are nodes in the list), set the current node's tail to the newNode and then set tail to the newNode
    // Increase length by 1
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  //   GOAL: Remove a value at the end and then set the second to the last Nodes's next to null and the Node itself as tail
  pop() {
    // If there is no head in the list before removing, return undefined
    // Create two variables, prev to hold the previous Node in the loop and the current to hold the current Node in the loop
    // Create a loop that checks if the current Node has a next, if it does set the previous variable to that Node and the set the current variable to the previous Node's next value to update what the loop will check
    // Once the loop is done set the second to the last Nodes's (prev) next to null and the Node (prev) itself as tail
    // Reduce length by 1

    // If after we remove the last node, the length equal 0, set the head and tail to null

    if (!this.head) return undefined;

    let prev = this.head;
    let current = this.head;

    while (current.next) {
      prev = current;
      current = prev.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
}
