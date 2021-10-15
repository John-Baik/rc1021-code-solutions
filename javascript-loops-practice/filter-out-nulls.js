/* exported filterOutNulls */
function filterOutNulls(values) {
  var array = [];
  var i = 0;
  while (i < values.length) {
    if (values[i] !== null) {
      array.push(values[i]);
    }
    i++;
  }
  return array;
}
