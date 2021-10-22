/* exported pick */
function pick(source, keys) {
  var object = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key in source && source[key] !== undefined) {
      object[key] = source[key];
    }
  }
  return object;
}
