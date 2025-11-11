// Node
class Node {
  constructor(value) {
    // Depiction of what a Node head is like
    this.data = value;
    this.next = null;
  }
}

// LinkedList
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head; // Initially, the head will also be the tail
    this.length = 1; // usually starts at 1 since we already created one node
  }

  push(value) {
    let newNode = new Node(value);
    // this.head → points to the first node in the linked list. So this condition checks whether the list is currently empty.
    // !this.head → means “there is no head” (so the value is null or undefined).
    if (!this.head) {
      // If the list has no nodes yet (this.head is null), then the new node becomes both the head and the tail:
      this.head = newNode;
      this.tail = this.head;
    }
    this.tail.next = newNode; // link the old tail to the new node
    this.tail = newNode; // update the tail to the new node
    this.length++; // increase the length
  }

  // The goal: Remove the last node from a linked list. (Check your notebook to understand better) [5] → [10] → [15] → null
  pop() {
    // This means there are no nodes yet so return undefined so there will no need to loop
    if (!this.head) {
      return undefined;
    }
    let temp = this.head; // This is to hold the node when are currently on to determine if it the last node or not
    let prev = this.head; // This is to hold the node previous node

    // While the current node (temp) still has a next that is not falsy i.e undefined, null etc. For each loop, since the temp has a next, set the temp as the previous node and update temp to previous node's next.
    // “As long as the current node has a next node, keep walking forward.”
    while (temp.next) {
      // prev = [5], temp = [10]
      prev = temp; // [5];
      temp = prev.next; // [10]
    }

    // Once the loop is done, the last node's next which is prev should be set to null and tail should be set to prev.
    // temp is now the last node
    // prev is the second-to-last node
    prev.next = null; // cut the link to last node
    this.tail = prev; // update tail to the new last node
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
  // The goal: Remove the first node from a linked list.
  unshift(value) {
    // If there were no previous node, set head and tail to the new node
    // Set the the new node as the head
    // Set the new node's next as the current head

    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.current = this.head;

    this.length++;

    return this;
  }

  shift() {
    // If there were no previous node, return undefined
    // Set the second node as the head
    // Remove the first node (head)
    // e.g [5] → [10] → [15] → null
    // Remove [5] => which is data and next
    // Set [10] as head
    // The last node will still be the tail

    if (!this.head) {
      return undefined; // If list is empty, nothing to remove
    }

    let nodeToDelete = this.head;
    this.head = this.head.next; // Because this line earlier already makes head null when there’s only one node.That is why only tail is set to null if length is zero
    nodeToDelete = null;
    this.length--;

    if (this.length == 0) {
      this.tail = null;
    }
    return nodeToDelete;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // If the list is empty → return null.
    if (!this.head) {
      return null;
    }
    // If not → walk through all the nodes until you reach the last one (whose .next is null).
    let temp = this.head;
    while (temp.next) {
      // while there’s another node
      temp = temp.next;
    }

    return temp; // when there’s no next, this is the last node
  }

  get(index) {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      if (counter == index) {
        return temp;
      }

      counter++;
      temp = temp.next;
    }

    return null;
  }

  set(index, value) {
    if (!this.head) {
      return false;
    }

    let counter = 0;
    let temp = this.head;

    while (temp) {
      if (counter == index) {
        temp.data = value;
        return true;
      }

      counter++;
      temp = temp.next;
    }

    return false;
  }

  setOptimized(index, value) {
    if (!this.head) {
      return false;
    }

    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    let counter = 0;
    let prev = this.head;
    let temp = this.head;

    while (temp.next) {
      if (counter == index) {
        prev.next = newNode;
        newNode.next = temp;
        return true;
      }

      counter++;
      prev = temp;
      temp = prev.next;
      this.length++;
    }

    return false;
  }

  // Correction
  insertValue(index, value) {
    // Index must be valid
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);

    // Case 1: Empty list
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return true;
    }

    // Case 2: Insert at the head
    if (index == 0) {
      // newNode.next = this.head;
      // this.head = newNode;
      // this.length++;
      // return true;

      return this.unshift(value);
    }

    // Case 3: Insert at the tail
    if (index == this.length) {
      return this.push(value);
    }

    let temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  size() {
    if (!this.head) {
      return false;
    }
    let counter = 0;
    let temp = this.head;
    let prev = this.head;
    while (temp) {
      counter++;
      temp = temp.next;
    }

    return counter;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

// My LinkedList
const myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
// console.log(myLinkedList);
// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());
// myLinkedList.pop();
// console.log(myLinkedList);

console.log(myLinkedList.getFirst());
console.log(myLinkedList.getLast());

// Iteration 1:
// temp → [5] → [10] → [15] → null

// Iteration 2:
//           temp → [10] → [15] → null

// Iteration 3:
//                    temp → [15] → null
//                    (stop, return this node)

// console.log(myLinkedList.setOptimized(3, 10));
console.log(myLinkedList.clear());
console.log(myLinkedList);
