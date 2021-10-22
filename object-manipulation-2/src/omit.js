/* exported omit */
function omit(source, key) {
  var object = {};
  var array = Object.keys(source);
  for (var i = 0; i < key.length; i++) {
    var word = key[i];
    if (array.length === 0) {
      return object;
    } else if (word !== array[i]) {
      object[array[i]] = source[array[i]];
    }
  }
  return object;
}
