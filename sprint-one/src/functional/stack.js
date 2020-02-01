var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var instanceSize = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[instanceSize] = value;
    instanceSize += 1;
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    return instanceSize;
  };

  return someInstance;
};
