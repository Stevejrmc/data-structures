class Stack {
  constructor() {
    this.storage = {};
    this.instanceSize = 0;
  }

  push(value) {
    this.storage[this.instanceSize] = value;
    this.instanceSize += 1;
  }

  pop() {
    if (this.instanceSize > 0) {
      this.instanceSize -= 1;
      const removed = this.storage[this.instanceSize];
      delete this.storage[this.instanceSize];
      return removed;
    }
  }

  size() {
    return this.instanceSize;
  }

}
