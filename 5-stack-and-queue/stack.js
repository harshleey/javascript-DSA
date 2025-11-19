class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    // Create new node
    // if there is not first, set first to that node

    // Node has data and next
    const newNode = new Node(value);

    if (this.length == 0) {
      this.first = newNode;
    }

    newNode.next = this.first;
    this.first = newNode;

    this.length++;
    return this;
  }

  pop() {
    // Remove the first element
    // Set the first's next as first
    // Set the current first to null

    if (this.length == 0) {
      return undefined;
    }

    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;

    // If we just popped the last element, ensure first is null
    if (this.length === 0) {
      this.first = null;
    }

    return temp;
  }

  min() {
    if (this.length == 0) {
      return undefined;
    }

    let min = this.first;
    let current = this.first;
    while (current.next) {
      if (current.next.data < min.data) {
        min = current.next;
      }

      current = current.next;
    }

    return min.data;
  }
}

let newStack = new Stack(3);
newStack.push(1000);
newStack.push(7);
newStack.pop();
console.log(newStack);

console.log(newStack.min());
