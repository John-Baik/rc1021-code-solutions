/* exported zip */
function zip(first, second) {
  var array = [];
  var arrayOne = [];
  if (first.length > second.length) {
    first.pop();
  } else if (first.length < second.length) {
    second.pop();
  }
  for (var i = 0; i < first.length; i++) {
    arrayOne.push(first[i]);
    arrayOne.push(second[i]);
  }
  for (var e = 0; e < arrayOne.length; e += 2) {
    array.push(arrayOne.slice(e, e + 2));
  }
  return array;
}
