
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
    for(let i = 0; i < candies.length; i++){
        if( candies[i] + extraCandies >= currentHigh){
            result[i] = true
        } else {
            result[i] = false
        }
    }
    console.log(result)
};

// kidsWithCandies([4,2,1,1,2], 1)

let findPermutations = (string) => {
  
    if (!string || typeof string !== "string"){
     return "Please enter a string"
   } else if (string.length < 2 ){
     return string
   }
 
   let permutationsArray = [] 
   
   for (let i = 0; i < string.length; i++){
    let char = string[i]
    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
    for (let permutation of findPermutations(remainingChars)){
        permutationsArray.push(char + permutation) }
     // Create a subproblems of string, each having size n/b
     // Call procedure p recursively on each subproblem
     // Combine the results from the subproblems
   }
   return permutationsArray
 }
 
//  findPermutations("abcd")

