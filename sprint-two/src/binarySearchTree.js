var BinarySearchTree = function(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype.insert = function(value) {
  // create a new BST
  var newBST = new BinarySearchTree(value);
  var inserted = false;
  // recursive helper func:
  var insertNode = currNode => {
    // check curr value to new value
    if (!inserted) {
      // Traverse rigt
      if (currNode.value < newBST.value) {
        // if no right node
        if (!currNode.right) {
          // insert newBST
          currNode.right = newBST;
          // set inserted to true
          inserted = true;
          // return
          return;
        }
        // call insertNode with curr right
        insertNode(currNode.right);
      }

      // Traverse left
      if (currNode.value > newBST.value) {
        // if no left node
        if (!currNode.left) {
          // insert newBST
          currNode.left = newBST;
          // set inserted to true
          inserted = true;
          // return
          return;
        }
        // call insertNode with curr left
        insertNode(currNode.left);
      }
    }
  };

  // call helper starting at root
  insertNode(this);
};

BinarySearchTree.prototype.contains = function(value) {
  // create default returnVal
  var exist = false;
  var searchComplete = false;

  // helper func:
  var nodeExist = currNode => {
    if (currNode.value === value) {
      // set exist to true
      exist = true;
      // set searchComplete to true
      searchComplete = true;
      // return;
      return;
    }
    if (!searchComplete) {
      // Traverse right
      if (currNode.value < value) {
        // check right node
        if (!currNode.right) {
          // set searchComplete to true
          searchComplete = true;
          // return
          return;
        }
        // call nodeExist with curr right
        nodeExist(currNode.right);
      }

      // Traverse left
      if (currNode.value > value) {
        // check left node
        if (!currNode.left) {
          // set searchComplete to true
          searchComplete = true;
          // return
          return;
        }
        // call nodeExist with curr left
        nodeExist(currNode.left);
      }
    }
  };

  // call helper with root
  nodeExist(this);

  // returnVal
  return exist;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // helper func:
  var traverseTree = currNode => {
    // pass curr value to cb
    cb(currNode.value);

    // traverse left
    if (currNode.left) {
      // call helper with left
      traverseTree(currNode.left);
    }

    // traverse right
    if (currNode.right) {
      // call helper with right
      traverseTree(currNode.right);
    }

  };

  // call helper with root
  traverseTree(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
