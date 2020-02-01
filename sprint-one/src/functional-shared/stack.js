var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.instanceSize = 0;

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.instanceSize] = value;
    this.instanceSize += 1;
  },
  pop: function() {
    if (this.instanceSize > 0) {
      this.instanceSize -= 1;
      var removed = this.storage[this.instanceSize];
      delete this.storage[this.instanceSize];
      return removed;
    }
  },
  size: function () {
    return this.instanceSize;
  }
};
