/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var number = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    number.push(currentNumber);
    currentNumber++;
  }
  return number;
}

console.log(getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log(getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word + ', ';
    count++;
  }
  return repeated;
}

console.log(repeatWord('super', 4));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

console.log(logEachCharacter('sonic'));

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    var result = numbers[i] * 2;
    doubled.push(result);
  }
  return doubled;
}

console.log(doubleAll([2, 3, 4, 6]));

var vehicle = {
  make: 'Tesla',
  model: 'Cybertruck',
  year: 2021
};

function getKeys(object) {
  var keys = [];
  for (var property in object) {
    keys.push(property);
  }
  return keys;
}

console.log(getKeys(vehicle));

function getValues(object) {
  var values = [];
  for (var property in object) {
    values.push(object[property]);
  }
  return values;
}

console.log(getValues(vehicle));
