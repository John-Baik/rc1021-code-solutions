var books = [
  {
    isbn: '921312321',
    title: 'Bible',
    author: 'God'
  },
  {
    isbn: '21312321',
    title: 'Bob the Builder',
    author: 'Bob'
  },
  {
    isbn: '876543456',
    title: 'Sonic the Hedgehog',
    author: 'Sonic'
  }
];

console.log('books:', books);
console.log('books typeof:', typeof books);

var stringify = JSON.stringify(books);

console.log('JSON.stringify:', stringify);
console.log('JSON stringify typeof:', typeof stringify);

var student = '{"Number id":2321312, "Name":"John"}';
console.log('student:', student);
console.log('student typeof:', typeof student);

var parse = JSON.parse(student);

console.log('JSON Parse:', parse);
console.log('JSON Parse typeof:', typeof parse);
