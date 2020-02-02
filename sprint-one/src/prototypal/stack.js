var Stack = function() {
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.instanceSize = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.instanceSize] = value;
  this.instanceSize += 1;
};

stackMethods.pop = function() {
  if (this.instanceSize > 0) {
    this.instanceSize -= 1;
    var removed = this.storage[this.instanceSize];
    delete this.storage[this.instanceSize];
    return removed;
  }
};

stackMethods.size = function() {
  return this.instanceSize;
};
