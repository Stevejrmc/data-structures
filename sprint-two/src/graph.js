
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodes[node]) {

    var nodeEdges = this.nodes[node];
    delete this.nodes[node];

    for (var value in this.nodes) {
      if (this.nodes[value].includes(node)) {
        var index = this.nodes[value].indexOf(node);
        this.nodes[value].splice(index, 1);
      }
    }

  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toIdx = this.nodes[fromNode].indexOf(toNode);
  this.nodes[fromNode].splice(toIdx, 1);
  var fromIdx = this.nodes[toNode].indexOf(fromNode);
  this.nodes[toNode].splice(fromIdx, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var value in this.nodes) {
    cb(value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  1. addNode: O(1)/ CONSTANT
  2. contains: O(1)/ CONSTANT
  3. removeNode: O(n^2)/ QUADRATIC
  4. hasEdge: O(n)/ LINEAR
  5. addEdge: O(1)/ CONSTANT
  6. removeEdge: O(n)/ LINEAR
  7. forEachNode: O(n)/ LINEAR
 */
