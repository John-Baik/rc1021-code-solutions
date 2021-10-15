/* exported getStudentNames */

function getStudentNames(students) {
  var array = [];
  for (var property in students) {
    array.push(students[property].name);
  }
  return array;
}
