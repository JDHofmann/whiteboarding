
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
    // console.log(result)
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




//permArr: Global array which holds the list of permutations
//usedChars: Global utility array which holds a list of "currently-in-use" characters
var permArr = [], usedChars = [];
function permute(input) {
  // console.log(input)
  //convert input into a char array (one element for each character)
  let i, ch;
  let chars = input.split("");
  for (i = 0; i < chars.length; i++) {
    //get and remove character at index "i" from char array
    ch = chars.splice(i, 1);
    //add removed character to the end of used characters
    usedChars.push(ch);
    // console.log(chars)
    //when there are no more characters left in char array to add, add used chars to list of permutations
    if (chars.length == 0) permArr[permArr.length] = usedChars.join("");
    //send characters (minus the removed one from above) from char array to be permuted
    // permute(chars.join(""));
    console.log(permArr, chars, ch)
    //add removed character back into char array in original position
    chars.splice(i, 0, ch);
    //remove the last character used off the end of used characters array
    usedChars.pop();
  }
}
// console.log(permute("abc"))

const permutations = arr => {
  console.log([arr])
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;

  return arr.reduce(
    (acc, item, i) =>
    // console.log(arr.slice(i))
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};
console.log(permutations(["q",5,3]));