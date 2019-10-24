var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.storage = {};
  newInstance.enqueue = queueMethods.enqueue;
  newInstance.dequeue = queueMethods.dequeue;
  newInstance.size = queueMethods.size;
  return newInstance;
};

var queueMethods = {
  enqueue: function(value) {
    var length = Object.keys(this.storage).length;
    if (length === 0) {
      this.storage[0] = value;
      return length;
    }
    var lastIndex = Object.keys(this.storage)[length - 1];
    this.storage[lastIndex - 1] = value;
    return length;
  },
  dequeue: function() {
    var length = Object.keys(this.storage).length;
    if (!length) {
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
