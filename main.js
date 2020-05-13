
function palindrome(str) {
  // Palindromes are the same forwards or backwards

  // Solution #1
  let reversed = "";

  for(let character of str) {
    reversed = character + reversed;
  }

  return str === reversed ? true : false;


  // Solution #2
  const reversed = str.split("").reverse().join("");

  if (str === reversed){
    return true;
  }
  else{
    return false;
  }


  // Solution #3
  let reversed = str.split("").reduce((reverse, character) => character + reverse, "");
  
  // Returns boolean
  return str === reversed;


  // Solution #4
  return str.split("").every((character, index) => character === str[str.length - index - 1]);

}


//palindrome("abba");
palindrome("abcdefg");
