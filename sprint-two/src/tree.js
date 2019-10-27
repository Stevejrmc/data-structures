var Tree = function(value) {
  var treeInstance = {};
  treeInstance.value = value;

  // your code here

  // attach methods to treeInstance (extends)
  _.extend(treeInstance, treeMethods);

  // An array containing a number of trees
  treeInstance.children = [];

  return treeInstance;
};

var treeMethods = {};

// Takes any valueParam, sets that as the value of the node
// and adds that node as a child of the tree
treeMethods.addChild = function(value) {
  // Create a newNode (aka treeInstance)
  // Set newNode/treeInstance value equal to valueArg
  var newTree = Tree(value);

  // Add newNode/treeInstance as a child of the tree
  this.children.push(newTree);
};

// Takes any input and returns a boolean reflecting
// whether it can be found
treeMethods.contains = function(target) {
  // helper functions:

  // Check for children
  var hasChildren = function(node) {
    if (node.children.length) {
      return true;
    }
    return false;
  };

  // Compares node.value to target
  var compareToTarget = function(node) {
    // If node.value equals target return true
    if (node.value === target) {
      return true;
    }

    // If node has children
    // compare children.value to target
    if (hasChildren(node)) {
      for (var i = 0; i < node.children.length; i++) {
        if (compareToTarget(node.children[i])) {
          return true;
        }
      }
    }
    // target not found
    return false;
  };

  // return result of comparison
  return compareToTarget(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
