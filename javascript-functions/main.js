function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  console.log(seconds);
  return seconds;
}

convertMinutesToSeconds(5);

function greet(name) {
  var greeting = 'Hey, ' + name;
  console.log(greeting);
  return greeting;
}

greet('John');

function getArea(width, height) {
  var area = width * height;
  console.log(area);
  return area;
}

getArea(17, 42);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log(getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log(getLastElementResult);
