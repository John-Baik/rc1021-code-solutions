/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) {
    return list;
  }
  const update = list.next;
  update.data = value;
  return update;
}
