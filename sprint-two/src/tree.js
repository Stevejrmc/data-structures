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
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
