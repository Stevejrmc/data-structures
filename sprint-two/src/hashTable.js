

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  var idx = bucket.reduce((acc, tuple, i) => {
    if (tuple[0] === k) {
      acc = i;
    }
    return acc;
  }, undefined);

  if (typeof idx === 'undefined') {
    bucket.push([k, v]);
  } else {
    bucket[idx] = [k, v];
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    return undefined;
  }
  return this._storage.get(index).filter(tuple => tuple[0] === k).flat()[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket.length === 1) {
    return this._storage.set(index, undefined);
  }
  var idx = bucket.reduce((acc, tuple, i) => {
    if (tuple[0] === k) {
      acc = i;
    }
    return acc;
  }, undefined);
  bucket[idx] = undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
