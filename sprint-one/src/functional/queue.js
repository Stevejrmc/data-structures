var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // created on the instance called storage and set equal to storage object;
  someInstance.storage = storage;
  // Implement the methods below

  // Add to queue
  someInstance.enqueue = function(value) {
    // Get current length
    var length = Object.keys(storage).length;
    // Index first element at zero
    if (length === 0) {
      someInstance.storage[0] = value;
      return length;
    }
    // Get Index/key for last value added
    var lastIndex = Object.keys(storage)[length - 1];
    // Set Index/key of new value to one more than last
    someInstance.storage[lastIndex + 1] = value;
    return length;
  };

  // remove from queue
  someInstance.dequeue = function() {
    // If storage is empty, return/exit
    if (!Object.keys(storage).length) {
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
