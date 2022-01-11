/* exported postpone */

function postpone(queue) {
  const frontValue = queue.peek();
  if (frontValue === undefined) {
    return;
  }
  queue.dequeue();
  queue.enqueue(frontValue);
}
