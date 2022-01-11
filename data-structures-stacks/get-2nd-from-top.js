/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  let last = '';
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    last = stack.peek();
    stack.pop();
  }
  const secondFromTop = stack.peek();
  stack.push(last);
  return secondFromTop;
}
