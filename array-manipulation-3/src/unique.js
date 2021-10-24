/* exported unique */
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
