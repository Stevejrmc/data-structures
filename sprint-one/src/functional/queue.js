var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  // Add to queue
  someInstance.enqueue = function(value) {
    // Index first element at zero
    if (someInstance.size() === 0) {
      storage[0] = value;
      return someInstance.size();
    }
    // Get Index/key for last value added
    var lastIndex = Object.keys(storage)[someInstance.size() - 1];
    // Set Index/key of new value to one more than last
    storage[lastIndex + 1] = value;
    return someInstance.size();
  };

  // remove from queue
  someInstance.dequeue = function() {
    // If storage is empty, return/exit
    if (!someInstance.size()) {
      return;
    }
    // Make a copy of value slated for deletion
    var removedValue = storage[Object.keys(storage)[0]].slice();
    // Delete value
    delete storage[Object.keys(storage)[0]];
    // Return what was deleted
    return removedValue;
  };

  // Get size
  someInstance.size = function() {
    // return size
    return Object.keys(storage).length;
  };

  return someInstance;
};
