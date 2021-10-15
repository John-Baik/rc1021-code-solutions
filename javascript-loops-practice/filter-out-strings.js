/* exported filterOutStrings */
function filterOutStrings(values) {
  var array = [];
  var i = 0;
  while (i < values.length) {
    if (typeof values[i] !== 'string') {
      array.push(values[i]);
    }
    i++;
  }
  return array;
}
