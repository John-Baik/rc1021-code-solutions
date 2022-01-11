/* exported takeSmaller */

function takeSmaller(queue) {
  const frontValue = queue.peek();
  queue.dequeue();
  if (queue.peek() === undefined) {
    return frontValue;
  }
  const secondValue = queue.peek();
  if (frontValue < secondValue) {
    queue.dequeue();
    queue.enqueue(secondValue);
    return frontValue;
  } else if (frontValue === secondValue) {
    queue.dequeue();
    queue.enqueue(secondValue);
    return frontValue;
  } else if (frontValue > secondValue) {
    queue.dequeue();
    queue.enqueue(frontValue);
    return secondValue;
  }
}
