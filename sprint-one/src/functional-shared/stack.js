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
  size: function () {
    return this.instanceSize;
  }
};
