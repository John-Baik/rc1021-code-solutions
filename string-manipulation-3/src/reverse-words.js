/* exported reverseWords */
function reverseWords(string) {
  var array = string.split(' ');
  var finalArray = [];
  for (var e = 0; e < array.length; e++) {
    var index = array[e];
    var final = '';
    for (var i = index.length - 1; i >= 0; i--) {
      final += index[i];
    }
    finalArray.push(final);
  }
  return finalArray.join(' ');
}
