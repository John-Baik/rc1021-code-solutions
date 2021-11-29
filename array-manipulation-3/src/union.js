/* exported union */
function union(first, second) {
  var array = [];
  var i = 0;
  while (i < first.length) {
    array.push(first[i]);
    i++;
  }
  var e = 0;
  while (e < second.length) {
    array.push(second[e]);
    e++;
  }
  return unique(array);
}

function unique(array) {
  var final = array.slice();
  var i = 0;
  while (i < final.length) {
    var e = i + 1;
    while (e < final.length) {
      if (final[i] !== final[e]) {
        e++;
      } else if (final[i] === final[e]) {
        final.splice(e, 1);
        continue;
      }
    }
    i++;
  }
  return final;
}
