/* exported chunk */
function chunk(array, size) {
  var finalArr = [];
  for (var i = 0; i < array.length; i += size) {
    finalArr.push(array.slice(i, size + i));
  }
  return finalArr;
}
