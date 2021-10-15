/* exported reverseWord */
function reverseWord(word) {
  var e = '';
  for (var i = word.length - 1; i >= 0; i--) {
    e += word[i];
  }
  return e;
}
