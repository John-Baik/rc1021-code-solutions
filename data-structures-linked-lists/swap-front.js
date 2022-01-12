/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const first = list;
  const second = list.next;
  const everythingElse = list.next.next;
  list = second;
  list.next = first;
  list.next.next = everythingElse;
  return list;
}

// Store head node in variable
// store next node in variable
// store next next node in variable
// update head with second variable
