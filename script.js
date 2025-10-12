function mincost(arr)
{ 
//write your code here
	if (arr.length <=1){
		return 0;
	}
	arr.sort((a,b)=>a-b);
	let totalcost = 0;
	while(arr.length>1){
		let first = arr.shift();
		let second = arr.shift();
	
	let cost = first + second;
	totalcost += cost;

	arr.push(cost);
	arr.sort((a,b)=>a-b);
// return the min cost
	}
	return totalcost;
}

module.exports=mincost;
