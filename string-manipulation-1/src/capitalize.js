/* exported capitalize */
function capitalize(word) {
  var i = 0;
  var e = '';
  var letter = '';
  while (i < word.length) {
    if (i === 0) {
      letter = word[i].toUpperCase();
      e += letter;
      i++;
    } else {
      letter = word[i].toLowerCase();
      e += letter;
      i++;
    }
  }
  return e;
}
