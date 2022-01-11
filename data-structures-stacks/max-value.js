/* exported maxValue */

function maxValue(stack) {
  let i = -Infinity;
  while (stack.peek() !== undefined) {
    if (stack.peek() > i) {
      i = stack.peek();
    }
    stack.pop();
  }
  return i;
}
