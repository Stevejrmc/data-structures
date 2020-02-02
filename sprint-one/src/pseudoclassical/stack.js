var Stack = function() {
  this.storage = {};
  this.instanceSize = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.instanceSize] = value;
  this.instanceSize += 1;
};

Stack.prototype.pop = function() {
  if (this.instanceSize > 0) {
    this.instanceSize -= 1;
    var removed = this.storage[this.instanceSize];
    delete this.storage[this.instanceSize];
    return removed;
  }
};

Stack.prototype.size = function() {
  return this.instanceSize;
};
