var Graph = function(value) {
  this.value = value;
  this.edges = [];
};

Graph.prototype.addNode = function(node) {
  var newNode = new Graph(node);
  newNode.edges.push(this);
  this.edges.push(newNode);
};

Graph.prototype.contains = function(node) {
  var found = false;

  var searchGraph = currNode => {
    if (currNode.value === node) {
      found = true;
      return;
    }
    if (!found) {
      if (currNode.edges.length) {
        currNode.edges.forEach(edge => {
          searchGraph(edge);
        });
      }
    }
  };

  searchGraph(this);
  return found;
};

Graph.prototype.removeNode = function(node) {
  node.edges = [];
  var remove = this.edges.indexOf(node);
  this.edges.splice(remove, 1);
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  fromNode = this.find(fromNode);
  toNode = this.find(toNode);
  if (fromNode.edges.includes(toNode)) {
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  fromNode = this.find(fromNode);
  toNode = this.find(toNode);
  fromNode.edges.push(toNode);
  toNode.edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  fromNode = this.find(fromNode);
  toNode = this.find(toNode);
  var fromIdx = toNode.edges.indexOf(fromNode);
  var toIdx = fromNode.edges.indexOf(toNode);
  fromNode.edges.splice(toIdx, 1);
  toNode.edges.splice(fromIdx, 1);
};

Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.edges.length; i++) {
    cb(this.edges[i], i, this.edges);
  }
};

Graph.prototype.find = function(value) {
  return Object.keys(value).length ? value : this.edges.filter(e => e.value === value).pop();
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
