/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const originalTop = stack.peek();
  stack.pop();
  stack.push(value);
  stack.push(originalTop);
  return stack.print();
}
