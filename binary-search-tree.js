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
    this.root = null
  }

  insert(val, currentNode=this.root) {
    // Your code here
    // create a new node with value val
    const newNode = new TreeNode(val);
    // if the tree is empty, set the root to newNode
    if (!this.root) {
      this.root = newNode; 
      return;
    }
    // if val < currentNode.val, 1. if currentNode left is empty, 
    // set newNode as a left child node to currentNode.
    // 2. if it's not, recursively call insert(val, currentNode.left)

    // Same logic should apply to the right branch
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        this.insert(val, currentNode.right)
      }
    }

  }

  search(val) {
    // Your code here
    // starting from the root, if val is equal to 
    // root, return true. 
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) return true;
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if(!currentNode) return 
    console.log("pre-order traversal", currentNode.val);
    this.preOrderTraversal(currentNode.left); 
    this.preOrderTraversal(currentNode.right); 
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if(!currentNode) return
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if(!currentNode) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val)
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // create a empty array as queue
    // push root node to the queue
    // as long as the queue is not empty, print out the 1st 
    // element from the queue, set a variable to point at that node 
    // check if the node has a left or right child, push in into the 
    // the queue if they exists.
//       4
//     /   \
//    2     7
//   / \   / \
//  1   3 5   8

    let queue = [this.root];
    // queue.push(this.root) 
    while (queue.length) {
      currentNode = queue.shift();
      console.log(currentNode);
      while(currentNode.left) queue.push(currentNode.left)
      while(currentNode.right) queue.push(currentNode.right)
    }
    
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}


bst = new BinarySearchTree();
bst.insert(4);
bst.insert(3);
bst.insert(5);

console.log(bst.postOrderTraversal())
// console.log(bst.search(1))
// console.log(bst.search(2))
// console.log(bst.search(3))
// console.log(bst.search(4))
// console.log(bst.search(5))
// console.log(bst.search(6))
// console.log(bst.search(7))

module.exports = { BinarySearchTree, TreeNode };