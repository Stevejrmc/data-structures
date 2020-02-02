var Stack = function() {
  this.storage = {};
  this.instanceSize = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.instanceSize] = value;
  this.instanceSize += 1;
};

Stack.prototype.size = function() {
  return this.instanceSize;
};
