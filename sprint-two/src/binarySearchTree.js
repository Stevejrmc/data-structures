var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  if (this.value > value) {
    if (this.left) {
      return this.left.contains(value);
    }
    return false;
  }

  if (this.value < value) {
    if (this.right) {
      return this.right.contains(value);
    }
    return false;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
