var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.instanceSize = 0;

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.instanceSize] = value;
    this.instanceSize += 1;
  },
  dequeue: function() {
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
  },
  size: function() {
    return this.instanceSize;
  }
};
