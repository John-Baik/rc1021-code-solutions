/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const update = new LinkedList(value);
  update.next = list;
  return update;
}
