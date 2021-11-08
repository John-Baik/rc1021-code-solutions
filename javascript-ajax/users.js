var userList = document.getElementById('user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);

  for (var i = 0; i < xhr.response.length; i++) {
    var user = xhr.response[i];
    var li = document.createElement('li');
    li.textContent = user.name;
    userList.appendChild(li);
  }
});
xhr.send();
