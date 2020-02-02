class Queue {
  constructor() {
    this.storage = {};
    this.instanceSize = 0;
  }

  enqueue(value) {
    this.storage[this.instanceSize] = value;
    this.instanceSize += 1;
  }

  dequeue() {
    if (this.instanceSize > 0) {
      this.instanceSize -= 1;
      const removed = this.storage[0];
      delete this.storage[0];
      if (this.instanceSize > 0) {
        for (var i = 0; i < this.instanceSize; i++) {
          this.storage[i] = this.storage[i + 1];
        }
      }

      return removed;
    }
  }

  size() {
    return this.instanceSize;
  }
}
