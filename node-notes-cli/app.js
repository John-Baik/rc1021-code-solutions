// const updatenode
// const delete

const command = process.argv[2].toLowerCase();

if (command === 'read') {
  require('./list');
} else if (command === 'create') {
  require('./add');
} else if (command === 'update') {
  require('./update');
} else if (command === 'delete') {
  require('./remove');
}
