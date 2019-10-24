var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.storage = {};
  _.extend(newInstance, queueMethods);
  return newInstance;
};

var queueMethods = {
  enqueue: function(value) {
    if (this.size() === 0) {
      this.storage[0] = value;
      return this.size();
    }
    var lastIndex = Object.keys(this.storage)[this.size() - 1];
    this.storage[lastIndex - 1] = value;
    return this.size();
  },
  dequeue: function() {
    if (!this.size()) {
      return;
    }
    var removedValue = this.storage[Object.keys(this.storage)[0]].slice();
    delete this.storage[Object.keys(this.storage)[0]];
    return removedValue;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};
