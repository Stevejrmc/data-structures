var Tree = function(value) {
  var treeInstance = {};
  treeInstance.value = value;

  // your code here

  // attach methods to treeInstance (extend)

  // An array containing a number of trees
  treeInstance.children = [];

  return treeInstance;
};

var treeMethods = {};

// Takes any valueParam, sets that as the value of the node
// and adds that node as a child of the tree
treeMethods.addChild = function(value) {
  // Create a newNode (aka treeInstance)
  //    Node:
  //        1. Object:
  //            A) value - any data type
  //            B) list/Array - References to children

  // Set newNode/treeInstance value equal to valueArg

  //    constraint:
  //      1. no reference is duplicated - utilize treeMethod.contains
  //         to confirm whether or not a value already exist on currentTree
  //      2. none points to the root - no references to parentNodes
  // if !contains (no reference exist, add node)

  // Add newNode/treeInstance as a child of the tree
};

// Takes any input and returns a boolean reflecting
// whether it can be found
treeMethods.contains = function(target) {
  // if treeInstance.value equal target
  //    return true;

  // if treeInstance.children.length
  //    loop through children
  //        treeInstance.contains(treeInstance[i]);

  // not found
  // return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
