console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [{
  name: 'John',
  hand: []
},
{
  name: 'Tristan',
  hand: []
},
{
  name: 'Eddie',
  hand: []
},
{
  name: 'Andy',
  hand: []

}];

var deck = [];
var Ace = 11;
var Jack = 10;
var Queen = 10;
var King = 10;
var rankNames = [Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King];
var suitNames = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
for (var e = 0; e < rankNames.length; e++) {
  for (var i = 0; i < suitNames.length; i++) {
    var object = { rank: rankNames[e], suit: suitNames[i] };
    deck.push(object);
  }
}
var shuffle = _.shuffle(deck);
console.log(shuffle);
for (var t = 0; t < players.length; t++) {
  var length = deck.length - 1 - t;
  players[t].hand.push(shuffle[t]);
  players[t].hand.push(shuffle[length]);
}
console.log(players);
var array = [];
for (var q = 0; q < players.length; q++) {
  var total = players[q].hand[0].rank + players[q].hand[0 + 1].rank;
  array.push(total);
}
console.log(array);
var winner = 0;
for (var p = 1; p < array.length; p++) {
  if (array[p] > array[winner]) {
    winner = p;
  }
}
console.log(players[winner].name);
