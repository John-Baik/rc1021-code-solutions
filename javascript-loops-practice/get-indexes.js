/* exported getIndexes */
function getIndexes(array) {
  var index = 0;
  var e = [];
  while (index < array.length) {
    e.push(index);
    index++;
  }
  return e;
}
