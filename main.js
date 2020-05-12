
function palindrome(str) {

  // Solution #1
  let reversed = ""

  for(character of str) {
    reversed = character + reversed;
  }

  return str === reversed ? true : false;

}


//palindrome("abba");
palindrome("abcdefg");