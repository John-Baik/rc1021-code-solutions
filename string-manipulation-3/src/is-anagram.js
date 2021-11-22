/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstWord = firstString.split(' ');
  var fullWordFirst = firstWord.join('');
  var secondWord = secondString.split(' ');
  var fullWordSecond = secondWord.join('');
  var array = fullWordFirst.split('');

  for (var i = 0; i < fullWordSecond.length; i++) {
    var output = false;
    for (var e = 0; e < array.length; e++) {
      if (fullWordSecond[i] === array[e]) {
        output = true;
        array.splice(e, 1);
        break;
      }
    }
    if (output === false) {
      return false;
    }
  }
  return true;
}
