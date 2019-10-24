var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  length: function() {
    return Object.keys(this.storage).length;
  },
  lastIndex: function() {
    return Object.keys(this.storage)[this.length() - 1];
  },
  push: function(value) {
    if (this.length() === 0) {
      this.storage[0] = value;
      return this.length();
    }
    this.storage[this.lastIndex() + 1] = value;
    return this.length();
  },
  pop: function() {
    if (this.length() === 0) {
      return;
    }
    var removedValue = this.storage[this.lastIndex()].slice();
    delete this.storage[this.lastIndex()];
    return removedValue;
  },
  size: function() {
    return this.length();
  }
};
