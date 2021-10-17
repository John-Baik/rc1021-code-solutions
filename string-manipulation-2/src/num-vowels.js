/* exported numVowels */
function numVowels(string) {
  var words = string.toLowerCase();
  var vowelAmount = 0;
  for (var i = 0; i < string.length; i++) {
    if (words.charAt(i) === 'a' || words.charAt(i) === 'e' || words.charAt(i) === 'i' || words.charAt(i) === 'o' || words.charAt(i) === 'u') {
      vowelAmount += 1;
    }
  }
  return vowelAmount;
}
