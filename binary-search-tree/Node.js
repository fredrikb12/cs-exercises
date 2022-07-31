class Node {
  constructor(data, left = null, right = null) {
    this._data = data;
    this._left = left;
    this._right = right;
  }
  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
  }

  get left() {
    return this._left;
  }

  set left(children) {
    this._left = children;
  }

  get right() {
    return this._right;
  }

  set right(children) {
    this._right = children;
  }
}

module.exports = Node;
