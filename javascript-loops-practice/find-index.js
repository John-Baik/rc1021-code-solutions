/* exported findIndex */
function findIndex(array, value) {
  var i = 0;
  while (i < array.length) {
    if (array[i] === value) {
      return i;
    }
    i++;
  }
  return -1;
}
