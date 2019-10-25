var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // Get current length
    var length = Object.keys(storage).length;
    // Index first element at zero
    if (length === 0) {
      storage[0] = value;
      return length;
    }
    // Get Index/key for last value added
    var lastIndex = Object.keys(storage)[length - 1];
    // Set Index/key of new value to one more than last
    storage[lastIndex + 1] = value;
    return length;
  };

  // remove last element
  someInstance.pop = function() {
    // If storage is empty, return/exit
    if (!Object.keys(storage).length) {
      return;
    }
    // Get current length
    var length = Object.keys(storage).length;
    // Get Index/key for last value added
    var lastIndex = Object.keys(storage)[length - 1];
    // Make copy of element to be removed
    var removedValue = storage[lastIndex].slice();
    delete storage[lastIndex];
    return removedValue;
  };

  someInstance.size = function() {
    // return size
    return Object.keys(storage).length;
  };

  return someInstance;
};
