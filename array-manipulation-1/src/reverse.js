/* exported reverse */
function reverse(array) {
  var list = [];
  for (var i = array.length - 1; i >= 0; i--) {
    list.push(array[i]);
  }
  return list;
}
