/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return;
  }
  const update = list.next.next;
  list.next = update;
}
