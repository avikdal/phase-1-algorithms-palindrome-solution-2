function isPalindrome(word) {
  //iterat from the beginning of the string to the middle of the string
  for( let startIndex =0; startIndex < word.length / 2; startIndex++){
    //compare the letter we're iterating over to the corresponding letter at the end of the string
    const endIndex = word.length -1 -startIndex;
    if(word[startIndex] !== word[endIndex]){
      //if letters don't match, return false
      return false;
    }
  }
  //if we reach the middle and all the letters match, return true
  return true;
}

/* 
  Add your pseudocode here
  iterate from the beginning of the string 
  to the middle of the string
  compare the letters iterated over to the 
  corresponding letter at the end of the string
  if the letters don't match, return false
  if we reach the middle and all the letters match
  return true

  Input: "racecar"
Input length divided by two: 3.5
Iteration:
  Index 0 (less than 3.5, keep iterating)
  Index 1 (less than 3.5, keep iterating)
  Index 2 (less than 3.5, keep iterating)
  Index 3 (less than 3.5, keep iterating)
  Index 4 (not less than 3.5, stop iterating)
For "racecar", loop will iterate to the middle "e"
*/

/*
  Add written explanation of your solution here
  make a isPalidrome function that when an input string 
  is the same forwards and backwards returns true, 
  if not , returns false

  madam == madam returns true
  boat != taob returns false
  dog != god return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("tacos"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));
}

module.exports = isPalindrome;
