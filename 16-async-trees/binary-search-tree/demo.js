'use strict';

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(value) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(value);
      return;
    }

    const _insert = node => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        } else if (node.left !== null) {
          return _insert(node.left);
        }
      } else if (value >= node.value) {
        if (node.right === null) {
          node.right = new Node(value);
          return;
        } else if (node.right !== null) {
          return _insert(node.right);
        }
      } else {
        return null;
      }
    };

    _insert(node);
  }

  // Root - Left - Right
  preOrder() {
    let results = [];

    let _walk = node => {
      results.push(node.value);
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
    };

    _walk(this.root);

    return results;
  }

  // Left - Right - Root
  postOrder() {
    let results = [];

    let _walk = node => {
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
      results.push(node.value);
    };

    _walk(this.root);

    return results;
  }

  // Left - Root - Right
  inOrder() {
    let results = [];
    let _walk = node => {
      if (node.left) {
        _walk(node.left);
      }

      results.push(node.value);

      if (node.right) {
        _walk(node.right);
      }
    };

    _walk(this.root);

    return results;
  }

  // Breadth First
  levelOrder() {
    let results = [];
    let nodeQueue = [];

    nodeQueue.push(this.root);

    while (nodeQueue.length) {
      let current = nodeQueue.shift();
      results.push(current.value);
      if (current.left) {
        nodeQueue.push(current.left);
      }
      if (current.right) {
        nodeQueue.push(current.right);
      }
    }

    return results;
  }
}

let tree = new BinarySearchTree();
let values = [9, 4, 17, 3, 6, 22, 5, 7, 20];
values.map(val => tree.insert(val));

console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());
console.log(tree.levelOrder());
