const Node = require("./Node");

class LinkedList {
  constructor(...values) {
    const tempValues = [...values];
    const storage = [];

    for (let i = tempValues.length - 1; i >= 0; i--) {
      debugger;
      const node = new Node(tempValues[i], storage[0]);
      storage.unshift(node);
    }
    this.values = [...storage];
  }

  append(value) {
    const newNode = new Node(value);
    this.values[this.values.length - 2].next_node = newNode;
    this.values.push(newNode);
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.values.unshift(newNode);
  }

  get size() {
    return this.values.length;
  }

  get head() {
    return this.values[0];
  }

  get tail() {
    return this.values[this.values.length - 1];
  }

  at(index) {
    return this.values[index];
  }

  pop() {
    this.values.pop();
  }

  contains(value) {
    return this.values.some((item) => item.value === value);
  }

  find(value) {
    const index = this.values.findIndex((item) => item.value === value);
    return index === -1 ? null : index;
  }

  to_s() {
    this.head.to_s();
  }
}

module.exports = LinkedList;
