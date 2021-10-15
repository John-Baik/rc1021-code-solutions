/* exported oddOrEven */
function oddOrEven(numbers) {
  var array = [];
  var i = 0;
  var e = '';
  while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      e = 'even';
      array.push(e);
    } else {
      e = 'odd';
      array.push(e);
    }
    i++;
  }
  return array;
}
