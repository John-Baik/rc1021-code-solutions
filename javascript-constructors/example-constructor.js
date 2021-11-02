function ExampleConstructor() {

}

console.log('prototype of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var example = new ExampleConstructor();
console.log(example);

var result = example instanceof ExampleConstructor;
console.log('result:', result);
