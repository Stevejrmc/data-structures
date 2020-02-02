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
  size: function() {
    return this.instanceSize;
  }
};
