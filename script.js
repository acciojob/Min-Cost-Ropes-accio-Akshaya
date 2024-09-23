function mincost(arr)
{ 
	let totalCost = 0;
  const minHeap = new MinHeap();

  
  arr.forEach(length => minHeap.insert(length));

  
  while (minHeap.size() > 1) {
    const first = minHeap.extractMin();
    const second = minHeap.extractMin();
    const cost = first + second;
    totalCost += cost;
    minHeap.insert(cost);
}

module.exports=mincost;
