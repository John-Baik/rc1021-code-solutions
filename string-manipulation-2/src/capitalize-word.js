/* exported capitalizeWord */
function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  var firstLetter = word[0].toUpperCase();
  if (lowerCase === 'javascript') {
    return 'JavaScript';
  } else {
    return firstLetter + lowerCase.substring(1, word.length);
  }
}
