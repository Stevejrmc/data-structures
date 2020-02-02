var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.tail) {
      list.head = Node(value);
      list.tail = list.head;
      return;
    }
    var oldTail = list.tail;
    list.tail = Node(value);
    oldTail.next = list.tail;
  };

  list.removeHead = function() {
    if (list.head) {
      var oldHead = list.head;
      list.head = oldHead.next;
      return oldHead.value;
    }
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
