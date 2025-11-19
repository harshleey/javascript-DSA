class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  //   Add to the back
  enqueue(value) {
    const newNode = new Node(value);

    if (this.length == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  //   Remove from the front
  dequeue() {
    if (this.length == 0) return undefined;
    let temp = this.first;

    if (this.length == 0) {
      this.first = null;
      this.last = null;
    }

    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}
