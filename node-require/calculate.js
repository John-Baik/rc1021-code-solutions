const add = require('./add');
const divide = require('./divide');
const multiply = require('./multiply');
const subtract = require('./subtract');

const op = process.argv[3].toLowerCase();
const num1 = parseFloat(process.argv[2]);
const num2 = parseFloat(process.argv[4]);

if (op === 'plus' || op === '+') {
  add(num1, num2);
} else if (op === 'minus' || op === '-') {
  subtract(num1, num2);
} else if (op === 'times' || op === 'x' || op === '*') {
  multiply(num1, num2);
} else if (op === 'divided' || op === '/' || op === 'over') {
  divide(num1, num2);
}
