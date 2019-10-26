var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // takes a value and adds it
    // to the end of the list

    // create a new node
    var newNode = Node(value);

    // if no currentTail (there is also no head)
    //    set newNode to equal head & tail
    //    return;

    // set currentTail next to newNode
    // set tail to newNode
    // return;
  };

  list.removeHead = function() {
    // removes the first node from the list
    // and returns it's value

    // get currentHead && set equal to removedHead
    // set currentHead next equal to head
    // return removedHead
  };

  list.contains = function(target) {
    // returns a boolean reflecting whether
    // or not a value is in the list

    // if !list.head (nullHead === emptyList)
    //    return false;

    // if list.head.value === target
    //    return true;

    // if list.head.next === null (head is also tail so exit)
    //    return false

    // helper function:
    // getNextNode() { currNode = currNode.next }

    // recursively search:
    // while currNode.value !== list.tail
    //    if currNode.value === target
    //        return true;
    //    getNextNode();

    // if list.tail.value === target
    //    return true;

    // target not in list
    // return false;
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
