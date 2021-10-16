/* exported initial */
function initial(array) {
  var beginning = [];
  for (var i = 0; i < array.length - 1; i++) {
    beginning.push(array[i]);
  }
  return beginning;
}
