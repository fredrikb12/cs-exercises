const Node = require("./Node");

class Tree {
  constructor(array) {
    this.array = array;
    this.root = this.buildTree(array);
  }

  get array() {
    return this._array;
  }

  set array(array) {
    this._array = array;
  }

  buildTree(array, start, end) {
    debugger;
    const uniquelySorted = [...new Set(array)].sort((a, b) => a - b);
    if (!start && !end) {
      start = 0;
      end = uniquelySorted.length - 1;
    }
    if (start > end) return null;
    const mid = parseInt((start + end) / 2);
    const root = new Node(uniquelySorted[mid]);
    root.left = this.buildTree(uniquelySorted.slice(start, mid));
    root.right = this.buildTree(uniquelySorted.slice(mid + 1));
    return root;
  }

  get root() {
    return this._root;
  }

  set root(root) {
    this._root = root;
  }

  insert(value) {
    
  }

  delete(value) {}
}

module.exports = Tree;
