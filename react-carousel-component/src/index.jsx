import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const pokemonList = [
  { id: 1, name: 'Bulbasaur', url: './images/001.png' },
  { id: 2, name: 'Charmander', url: './images/004.png' },
  { id: 3, name: 'Squirtle', url: './images/007.png' },
  { id: 4, name: 'Pikachu', url: './images/025.png' },
  { id: 5, name: 'Jigglypuff', url: './images/039.png' }
];

ReactDOM.render(<Carousel pokemonList={pokemonList} />, document.getElementById('root'));
