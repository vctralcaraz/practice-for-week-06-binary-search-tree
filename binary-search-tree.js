// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    if(currentNode === null) {
      this.root = new TreeNode(val);
    }

    while(currentNode !== null) {
      if(val < currentNode.val && currentNode.left === null) {
        currentNode.left = new TreeNode(val);
      } else if(val < currentNode.val && currentNode.left !== null) {
        currentNode = currentNode.left;
      } else if(val > currentNode.val && currentNode.right === null) {
        currentNode.right = new TreeNode(val);
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  search(val) {
    // Your code here
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };