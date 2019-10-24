var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    var length = Object.keys(this.storage).length;
    if (length === 0) {
      this.storage[0] = value;
      return Object.keys(this.storage).length;
    }
    var lastIndex = Object.keys(this.storage)[length - 1];
    this.storage[lastIndex + 1] = value;
    return length;
  },
  pop: function() {
    var length = Object.keys(this.storage).length;
    if (length === 0) {
      return;
    }
    var removedValue = this.storage[Object.keys(this.storage)[length - 1]].slice();
    delete this.storage[Object.keys(this.storage)[length - 1]];
    return removedValue;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};
