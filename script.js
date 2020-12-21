
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: 
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 


const kidsWithCandies = (candies, extraCandies) => {
    let currentHigh = Math.max(...candies);
    let result = []
    // for(let i = 0; i < candies.length; i++){
    //     console.log(candies[i])
    //     if( candies[i] >= currentHigh){
    //         currentHigh = candies[i];
    //     }
    // }
    for(let i = 0; i < candies.length; i++){
        if( candies[i] + extraCandies >= currentHigh){
            result[i] = true
        } else {
            result[i] = false
        }
    }
    console.log(result)
};

kidsWithCandies([4,2,1,1,2], 1)