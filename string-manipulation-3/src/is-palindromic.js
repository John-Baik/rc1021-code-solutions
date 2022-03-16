/* exported isPalindromic */
function isPalindromic(string) {
  var reverse = '';
  var word = string.split(' ');
  var fullWord = word.join('');
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      reverse += string[i];
    }
  }
  if (reverse === fullWord) {
    return true;
  } else {
    return false;
  }
}

// create an empty string variable called reverse
// Loop through string starting from the end and incrementing down
// concatenate string at index of loop to the reverse variable
// run an if statement to check if reverse variable is equal to string.
// if equal, return true
// if not equal, return false
