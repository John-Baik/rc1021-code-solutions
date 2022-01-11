/* exported take2nd */

function take2nd(queue) {
  const frontValue = queue.peek();
  queue.dequeue();
  if (queue.peek() === undefined) {
    return frontValue;
  }
  const secondValue = queue.peek();
  queue.enqueue(frontValue);
  queue.dequeue();
  return secondValue;
}
