/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      word += string[secondIndex];
    } else if (i === secondIndex) {
      word += string[firstIndex];
    } else {
      word += string[i];
    }
  }
  return word;
}

// define a function swapChars that is called with 3 parameters, firstIndex, secondIndex, and string
// define an empty string variable named word
// define a for loop that loops through the string argument using variable "i"
// define an if statement that checks if variable i is equal to firtIndex argument
// if i is equal to firstIndex, then add the string value at index of secondIndex to the word variable.
// define an else if statement that checks if variable i is equal to secondIndex
// if i is equal to secondIndex, then add the string value at index of firstIndex to the word variable
// define an else statement that runs if neither the if or else if statement is true
// WIthin else statement, add the string value at index of i to the word variable.
// return word variable
