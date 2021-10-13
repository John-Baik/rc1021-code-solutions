var John = 23;
var Tristan = 25;
var Andy = 28;

var maximumValue = Math.max(John, Tristan, Andy);

console.log('maximumValue:', maximumValue);

var heroes = ['Spiderman', 'Ironman', 'Batman', 'Man'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
var randomHero = heroes[randomIndex];

console.log('randomNumber:', randomNumber);
console.log('randomIndex:', randomIndex);
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Dancing Cool',
    author: 'Bailey Sok'
  },
  {
    title: 'Bible',
    author: 'God'
  },
  {
    title: 'Runinng',
    author: 'Dude'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'John Baik';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
