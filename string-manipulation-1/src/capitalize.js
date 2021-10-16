/* exported capitalize */
function capitalize(word) {
  var i = 0;
  var string = '';
  var letter = '';
  while (i < word.length) {
    if (i === 0) {
      letter = word[i].toUpperCase();
      string += letter;
      i++;
    } else {
      letter = word[i].toLowerCase();
      string += letter;
      i++;
    }
  }
  return string;
}
