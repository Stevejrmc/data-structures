
// Instantiate a new graph
var Graph = function() {
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newGraph = new Graph();
  newGraph.edges.push(this);
  this.edges.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var isFound = false;
  this.edges.forEach(function(e) {
    if (e === node) {
      isFound = true;
    }
  });
  return isFound;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.edges.includes(node)) {
    var index = this.edges.indexOf(node);
    this.edges.splice(index, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
