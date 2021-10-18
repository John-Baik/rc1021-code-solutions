/* exported dropRight */
function dropRight(array, count) {
  var value = array.length - count;
  return array.slice(0, value);
}
