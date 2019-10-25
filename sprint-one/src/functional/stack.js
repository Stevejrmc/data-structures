var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
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

  // remove last element
  someInstance.pop = function() {
    // If storage is empty, return/exit
    if (!someInstance.size()) {
      return;
    }
    // Get Index/key for last value added
    var lastIndex = Object.keys(storage)[someInstance.size() - 1];
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
