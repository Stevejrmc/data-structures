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
    var isFound = false;
    var isTarget = function(node) {
      if (node.value === target) {
        isFound = true;
      }
      if (!isFound) {
        if (node.next) {
          return isTarget(node.next);
        }
      }
      return isFound;
    };

    return isTarget(list.head);
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
   1. addToTail: O(1) / CONSTANT
   2. removeHead: O(1) / CONSTANT
   3. contains: O(n) / LINEAR
 */
