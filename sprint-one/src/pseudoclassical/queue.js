var Queue = function() {
  this.storage = {};
  this.instanceSize = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.instanceSize] = value;
  this.instanceSize += 1;
};

Queue.prototype.size = function() {
  return this.instanceSize;
};
