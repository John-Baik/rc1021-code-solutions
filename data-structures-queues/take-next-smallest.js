/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let frontValue = queue.dequeue();
  while (frontValue > queue.peek()) {
    queue.enqueue(frontValue);
    frontValue = queue.dequeue();
  }
  return frontValue;
}

// Save first value into variable "frontValue"

// Use while loop to find the next smallest

// return "frontValue"
