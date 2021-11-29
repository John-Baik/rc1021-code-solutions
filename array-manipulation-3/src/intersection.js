/* exported intersection */
function intersection(first, second) {
  var array = [];
  for (var i = 0; i < first.length; i++) {
    var e = 0;
    while (e < second.length) {
      if (first[i] === second[e]) {
        array.push(first[i]);
        i++;
      } else if (first[i] !== second[e]) {
        e++;
      }
    }
  }
  return array;
}
