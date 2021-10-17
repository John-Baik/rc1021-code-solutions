/* exported truncate */
function truncate(length, string) {
  return string.slice(0, length) + '...';
}

// define a function truncate that is called with 2 arguments, length and string
// return the string value by using slice and setting it's arguments to starting index of 0 and ending index of length. Concatenate string "..." at the end.
