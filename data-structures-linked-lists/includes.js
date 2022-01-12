/* exported includes */

function includes(list, value) {
  while (list.next !== null) {
    if (list.data === value) {
      return true;
    } else {
      list = list.next;
    }
  }
  if (list.data === value) {
    return true;
  }
  return false;
}
