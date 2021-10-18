/* exported getKeys */
function getKeys(object) {
  var array = [];
  for (var property in object) {
    array.push(property);
  }
  return array;
}

// define function getKeys with one parameter of object
// def array variable with empyu array literal
// define a for in loop that loops through object and sets a variable called property for each key
// push the property variable containing the keys into the array variable
// return keys using array variable
