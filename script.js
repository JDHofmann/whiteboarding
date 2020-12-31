
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

// const permutations = arr => {
//   console.log([arr])
//   if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;

//   return arr.reduce(
//     (acc, item, i) =>
//     // console.log(arr.slice(i))
//       acc.concat(
//         permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
//           item,
//           ...val,
//         ])
//       ),
//     []
//   );
// };
// console.log(permutations(["q",5,3]));

// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// √ 1. The username is between 4 and 25 characters.
// √ 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// √ 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.

// Examples
// Input: "aa_"
// Output: false
// Input: "u__hello_world123"
// Output: true

function CodelandUsernameValidation(str) { 
  // my solution
  // if(3 < str.length && str.length < 25 && (/[a-zA-Z]/).test(str[0]) && str[str.length-1] !== "_" ){
  //   let chars = /[a-zA-Z0-9\_]/;
  //   for(let i=0; i < str.length; i++){
  //     if(!str[i].match(chars)) return false
  //   }
  //   return str
  // } else return false

// better solution

  const valid_reg = /^[A-Za-z]\w+[A-Za-z0-9]$/;
  const valid_length = (str) => str.length >= 4 && str.length <= 25;
  return valid_reg.test(str) && valid_length(str);

}
   
// console.log(CodelandUsernameValidation("u__hello_world123"));

// Find Intersection

// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
// Examples
let input = ["1, 3, 4, 7, 13", "1, 2, 4, 7, 8, 13, 15"]
// Output: 1,4,13
// let input = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10

function FindIntersection(strArr) { 

// my solution

  // let one = strArr[0].split(', ')
  // let two = strArr[1].split(', ')
  // let intersection = [];
  // for(let i = 0; i<one.length; i++){
  //   if(two.includes(one[i])){
  //     intersection.push(one[i])
  //   }
  // }
  // return intersection.length > 0 ? intersection.join(',') : false; 

  // solution I found

  const list1 = strArr[0].split(", ");
  const list2 = strArr[1].split(", ");
  const test = list1.filter(val => list2.indexOf(val) !== -1);
  return test.length ? test.join(",") : false; 
}
// console.log(FindIntersection(input));

// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
// Example
let one = "coderbyte"
// Output: etybredoc
let two = "I Love Code"
// Output: edoC evoL I

function FirstReverse(str) { 

  let array = str.split("");
  let result = array.reverse().join("")

  return result; 

}
   
// keep this function call here 
console.log(FirstReverse(two));