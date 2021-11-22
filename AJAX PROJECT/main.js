var $characterList = document.getElementById('character-list');

function renderImage() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/500');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    var name = xhr.response.name;
    var link = xhr.response.sprites.other['official-artwork'].front_default;
    var li = document.createElement('li');
    var img = document.createElement('img');
    var title = document.createElement('h1');
    img.setAttribute('src', link);
    li.appendChild(img);
    $characterList.appendChild(li);
    title.textContent = name;
    li.appendChild(title);
    for (var e = 0; e < xhr.response.stats.length; e++) {
      var statName = xhr.response.stats[e].stat.name;
      var statValue = xhr.response.stats[e].base_stat;
      var stat = document.createElement('p');
      stat.textContent = statName + ': ' + statValue;
      li.appendChild(stat);
    }
  });
  xhr.send();
}
renderImage();

// ul {
//   list-style: none;
// }

// Create li variable
// Create img variable
// Create src class in img variable with link inside
// Append img to link
// // append li to ul

// name, height, abilities;

// var statList = '';
// for (var i = 0; i < xhr.response.abilities.length; i++) {
//   var abilities = xhr.response.abilities[i].ability.name;
//   if (i < xhr.response.abilities.length - 1) {
//     statList += abilities + ', ';
//   } else {
//     statList += abilities;
//   }
// }
// var stats = document.createElement('p');
// stats.textContent = 'Abilities: ' + statList;
// li.appendChild(stats);

// var height = xhr.response.height;
// var heightStat = document.createElement('p');
// heightStat.textContent = 'Height: ' + height;
// li.appendChild(heightStat);

// var type = xhr.response.types[0].type.name;
// var typeStat = document.createElement('p');
// typeStat.textContent = 'Type: ' + type;
// li.appendChild(typeStat);

// var randomNumber = Math.floor(Math.random() * 20);
