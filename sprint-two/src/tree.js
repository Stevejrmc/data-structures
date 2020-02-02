var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var isFound = false;

  var isTarget = function(node) {
    if (node.value === target) {
      isFound = true;
    }
    if (!isFound) {
      if (node.children.length) {
        for (var i = 0; i < node.children.length; i++) {
          if (isTarget(node.children[i])) {
            isFound = true;
          }
        }
      }
    }
    return isFound;
  };

  return isTarget(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
