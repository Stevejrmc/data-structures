var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

var queueMethods = {
  enqueue: function(value) {
    if (!this.size()) {
      this.storage[0] = value;
      return this.size();
    }
    var lastIndex = Number(Object.keys(this.storage)[this.size() - 1]);
    this.storage[lastIndex + 1] = value;
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

Queue.prototype.enqueue = queueMethods.enqueue;
Queue.prototype.dequeue = queueMethods.dequeue;
Queue.prototype.size = queueMethods.size;
