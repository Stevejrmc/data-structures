

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    var bucket = [];
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  }
  var bucket = this._storage.get(index);
  if (bucket[0][0] === k) {
    bucket[0][1] = v;
  } else {
    bucket[1] = [k, v];
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return undefined;
  }
  return bucket[0][0] === k ? bucket[0][1] : bucket[1][1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket[0][0] === k) {
    if (bucket.length < 2) {
      this._storage.set(index, undefined);
      return;
    }
    bucket.shift();
    this._storage.set(index, bucket);
  } else {
    bucket.pop();
    this._storage.set(index, bucket);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
