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

stackMethods.size = function() {
  return this.instanceSize;
};
