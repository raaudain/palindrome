
function palindrome(str) {
  // Palindromes are the same forwards or backwards

  // // Solution #1
  // let reversed = ""

  // for(character of str) {
  //   reversed = character + reversed;
  // }

  // return str === reversed ? true : false;


  // Solution #2
  let reversed = str.split("").reverse().join("");

  if (str === reversed){
    return true;
  }
  else{
    return false;
  }

}


palindrome("abba");
//palindrome("abcdefg");