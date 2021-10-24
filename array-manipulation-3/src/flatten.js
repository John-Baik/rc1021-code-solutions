/* exported flatten */
function flatten(array) {
  var final = [];
  for (var i = 0; i < array.length; i++) {
    var index = array[i];
    if (typeof array[i] === 'object') {
      for (var e = 0; e < index.length; e++) {
        final.push(index[e]);
      }
    } else {
      final.push(array[i]);
    }
  }
  return final;
}
