/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let i = 0;
  while (i !== index) {
    const frontValue = queue.peek();
    queue.dequeue();
    queue.enqueue(frontValue);
    i++;
  }
  return queue.dequeue();
}
