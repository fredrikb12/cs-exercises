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

  insert(value, root) {
    if (!root) root = this.root;
    if (value === root.data) return;
    if (value < root.data) {
      root.left ? this.insert(value, root.left) : (root.left = new Node(value));
    } else {
      root.right
        ? this.insert(value, root.right)
        : (root.right = new Node(value));
    }
  }

  // This method mainly calls deleteRec()
  delete(value) {
    this.root = this.deleteRec(this.root, value);
  }

  deleteRec(root, value) {
    if (root == null) return root;

    if (value < root.data) root.left = this.deleteRec(root.left, value);
    else if (value > root.value) root.right = this.deleteRec(root.right, value);
    else {
      if (root.left == null) return root.right;
      else if (root.right == null) return root.left;

      root.data = this.minValue(root.right);

      root.right = this.deleteRec(root.right, root.data);
    }

    return root;
  }

  minValue(root) {
    let minv = root.data;
    while (root.left != null) {
      minv = root.left.data;
      root = root.left;
    }
    return minv;
  }
}

module.exports = Tree;
