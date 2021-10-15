/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var array = [];
  var i = 0;
  var e = '';
  while (i < words.length) {
    e = words[i] + suffix;
    array.push(e);
    i++;
  }
  return array;
}
