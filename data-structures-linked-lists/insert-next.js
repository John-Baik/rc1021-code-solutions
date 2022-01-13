/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const update = list.next;
  list.next = new LinkedList(value);
  list.next.next = update;
}

// Find the next node in list.
//
