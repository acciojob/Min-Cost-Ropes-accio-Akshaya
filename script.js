function mincost(arr)
{ 

    let totalCost = 0;

    // Sort the array initially
    arr.sort((a, b) => a - b);

    while (arr.length > 1) {
        // Extract the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        // Calculate the cost of connecting them
        let cost = first + second;
        totalCost += cost;

        // Insert the combined rope back into the array
        arr.push(cost);

        // Sort the array to keep the smallest ropes at the front
        arr.sort((a, b) => a - b);
    }

    return totalCost;
}

module.exports=mincost;
