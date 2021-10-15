/* exported sumAll */
function sumAll(numbers) {
  var i = 0;
  var sum = 0;
  while (i < numbers.length) {
    sum = sum + numbers[i];
    i++;
  }
  return sum;
}
