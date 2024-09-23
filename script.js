function mincost(arr)
{ 
	let totalCost = 0;

  // Step 1: Initialize a min-heap (priority queue) and add all ropes to it
  const minHeap = new MinHeap((a, b) => a - b);  // min heap (smallest element on top)
  arr.forEach(length => minHeap.push(length));

  // Step 2: While there is more than one rope, extract two smallest ropes
  while (minHeap.size() > 1) {
    const first = minHeap.pop(); 
    const second = minHeap.pop(); // Second smallest rope

    const cost = first + second;  // Cost of connecting the two ropes
    totalCost += cost;            // Add cost to total

    minHeap.push(cost);  
}

module.exports=mincost;
