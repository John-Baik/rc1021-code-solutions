/* exported getValues */
function getValues(object) {
  var array = [];
  for (var property in object) {
    array.push(object[property]);
  }
  return array;
}
