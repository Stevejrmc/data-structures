var Queue = function() {
  this.storage = {};
  this.instanceSize = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.instanceSize] = value;
  this.instanceSize += 1;
};

Queue.prototype.dequeue = function() {
  if (this.instanceSize > 0) {
    this.instanceSize -= 1;
    var removed = this.storage[0];
    if (this.instanceSize > 0) {
      for (var i = 0; i < this.instanceSize; i++) {
        this.storage[i] = this.storage[i + 1];
      }
    }

    return removed;
  }
};

Queue.prototype.size = function() {
  return this.instanceSize;
};
