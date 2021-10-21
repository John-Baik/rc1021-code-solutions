var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', function (event) {
  if (event.target && event.target.tagName === 'BUTTON') {
    var closest = event.target.closest('.task-list-item');
    console.log('closest .task-list-item:', closest);
    closest.remove('.task-list-item');
  }
});
