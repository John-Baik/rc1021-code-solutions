/* exported take */
function take(array, count) {
  var full = [];
  for (var i = 0; i < array.length; i++) {
    if (i === count - 1) {
      full.push(array[i]);
      return full;
    } else {
      full.push(array[i]);
    }
  }
  return full;
}
