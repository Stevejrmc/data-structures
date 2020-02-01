var Queue = function() {
  var someInstance = {};

  someInstance.storage = {};
  someInstance.instanceSize = 0;

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.instanceSize] = value;
    this.instanceSize += 1;
  },
  size: function() {
    return this.instanceSize;
  }
};
