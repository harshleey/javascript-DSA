class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    const firstItem = this.data[0];
    delete this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    delete this.data[this.length];
    return firstItem;
  }

  deleteByIndex(index) {
    const item = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    delete this.data[this.length];
    return item;
  }
}

const myNewArray = new MyArray();
console.log(myNewArray); // MyArray { length: 0, data: {} }
myNewArray.push("yellow");
myNewArray.push("pink");
myNewArray.push("apple");
myNewArray.push("cup");
// console.log(myNewArray.data);
// console.log(myNewArray.get(0));
// myNewArray.pop();
console.log(myNewArray);
// myNewArray.shift();
// console.log(myNewArray);
// console.log(myNewArray.deleteByIndex(2));
// console.log(myNewArray);
