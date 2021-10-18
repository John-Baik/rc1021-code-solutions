/* exported takeRight */
function takeRight(array, count) {
  var marker = array.length - count;
  return array.slice(marker);
}

// define function takeRight with 2 parameters, array and count.
// define variable marker that subtracts count value from length of array
// slice array at value of marker variable and return array result
