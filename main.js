
function palindrome(str) {
  // Palindromes are the same forwards or backwards

  // // Solution #1
  // let reversed = ""

  // for(character of str) {
  //   reversed = character + reversed;
  // }

  // return str === reversed ? true : false;


  // // Solution #2
  // let reversed = str.split("").reverse().join("");

  // if (str === reversed){
  //   return true;
  // }
  // else{
  //   return false;
  // }

  // Solution #3
  let reversed = str.split("").reduce((reverse, character) => character + reverse, "");
  
  return str === reversed ? true : false;

}


//palindrome("abba");
palindrome("abcdefg");