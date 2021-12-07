const takeAChance = require('./take-a-chance');

const promise = takeAChance('John');
promise.then(data => {
  console.log(data);
});
promise.catch(error => {
  console.error(error);
});
