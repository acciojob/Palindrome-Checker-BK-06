
function palindrome(str) {
  let palindromeStr = "";
  for (let index = 0; index < str.length; index++) {
    let currChar = str.at(index);
    palindromeStr = currChar + palindromeStr;
  }
  if (palindromeStr === str) {
	  return true;
  }
  return false;
}

module.exports = palindrome