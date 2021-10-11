var student = {
  firstName: 'John',
  lastName: 'Baik',
  age: 23
};

var fullName = student.firstName + ' ' + student.lastName;

student.livesInIrvine = false;
student.previousOccupation = 'Video Editor';

console.log('value of fullName:', fullName);
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Tesla',
  model: 'Cybertruck',
  year: 2021
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Zuko',
  type: 'chihuahua'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
