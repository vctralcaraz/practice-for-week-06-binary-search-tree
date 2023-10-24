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
    let node = this.root;
    
    while(node !== null) {
      if(val === node.val) return true;

      if(val > node.val) {
        node = node.right;
      } else {
        node = node.left;
      }
    }

    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode === null) return;

    console.log(currentNode.val);

    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here

    if(currentNode === null) return;

    this.inOrderTraversal(currentNode.left);

    console.log(currentNode.val);

    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here

    if(currentNode === null) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    
    console.log(currentNode.val);
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