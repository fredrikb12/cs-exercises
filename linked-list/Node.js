class Node {
  constructor(value = null, next_node = null) {
    this._value = value;
    this.next_node = next_node;
  }
  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  get next_node() {
    return this._next_node;
  }

  set next_node(node) {
    this._next_node = node;
  }

  to_s() {
    console.log(`( ${this.value} )`);
    if (this.next_node) this.next_node.to_s();
    else console.log(null);
  }
}

module.exports = Node;
