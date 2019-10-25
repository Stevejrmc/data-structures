class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  lastIndex() {
    return Number(Object.keys(this.storage)[this.size() - 1]);
  }

  push(value) {
    if (!this.size()) {
      this.storage[0] = value;
      return this.size();
    }
    this.storage[this.lastIndex() + 1] = value;
    return this.size();
  }

  pop() {
    if (!this.size()) {
      return;
    }
    var removedValue = this.storage[Object.keys(this.storage)[this.lastIndex()]].slice();
    delete this.storage[Object.keys(this.storage)[this.lastIndex()]];
    return removedValue;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
