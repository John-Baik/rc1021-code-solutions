var width = 20;
var height = 20;
var area = width * height;
var bill = 100;
var payment = 50;
var change = bill - payment;
var quizzes = 6;
var midterm = 9;
var final = 20;
var grade = (quizzes + midterm + final) / 3;
var firstName = 'John';
var lastName = 'Baik';
var fullName = firstName + ' ' + lastName;
var pH = 3;
var isAcidic = pH < 7;
var headCount = 35;
var isSparta = headCount === 300;
var motto = fullName;
motto += ' is the GOAT';

console.log('value of area:', area);
console.log('typeof area:', typeof area);
console.log('value of change:', change);
console.log('typeof change:', typeof change);
console.log('value of grade', grade);
console.log('typeof grade:', typeof grade);
console.log('value of fullName:', fullName);
console.log('typeof fullName', typeof fullName);
console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic', typeof isAcidic);
console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);
console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);