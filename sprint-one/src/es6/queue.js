class Queue {
  constructor() {
    this.storage = {};
    this.instanceSize = 0;
  }

  enqueue(value) {
    this.storage[this.instanceSize] = value;
    this.instanceSize += 1;
  }

  size() {
    return this.instanceSize;
  }
}
