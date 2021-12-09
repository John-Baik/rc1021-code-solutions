const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const add = (previousValue, currentValue) => previousValue + currentValue;
const sum = numbers.reduce(add);
console.log('sum:', sum);

const multiply = (previousValue, currentValue) => previousValue * currentValue;
const product = numbers.reduce(multiply);
console.log('product: ', product);

const total = (accumulator, currentValue) => {
  if (currentValue.type === 'deposit') {
    console.log('accumulator: ', accumulator);
    console.log('currentValue.amount: ', currentValue.amount);
    return accumulator + currentValue.amount;
  } else if (currentValue.type === 'withdrawal') {
    return accumulator - currentValue.amount;
  }
};

const balance = account.reduce(total, 0);
console.log('balance: ', balance);

const combine = (previousValue, currentValue) => Object.assign(previousValue, currentValue);

const composite = traits.reduce(combine, {});
console.log('composite: ', composite);
