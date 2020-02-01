var Queue = function() {
  var someInstance = {};

  var storage = {};
  var instanceSize = 0;

  someInstance.enqueue = function(value) {
    storage[instanceSize] = value;
    instanceSize += 1;
  };

  someInstance.dequeue = function() {
    if (instanceSize > 0) {
      instanceSize -= 1;
      var removed = storage[0];
      delete storage[0];
      if (instanceSize > 0) {
        for (var i = 0; i < instanceSize; i++) {
          storage[i] = storage[i + 1];
        }
      }
      return removed;
    }
  };

  someInstance.size = function() {
    return instanceSize;
  };

  return someInstance;
};
