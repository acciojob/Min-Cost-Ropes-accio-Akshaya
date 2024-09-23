function mincost(arr)
{ 
	let totalCost = 0;
	while (arr.length > 1) {
		arr.sort((a,b)=>a-b);
		let first = arr.shift();
		let second = arr.shift();

		let cost = first + second;
		totalcost += cost;

		arr.push(cost);
		
		
	}
//write your code here
	return totalCost;
// return the min cost
  
}

module.exports=mincost;
