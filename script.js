// complete the given function


const input = window.prompt();
//const input = "RaceCar";

//const str = input.toLowerCase();
let palindromeStr = "";
function palindrome(str) {
  for (let index = 0; index < str.length; index++) {
    let currChar = str.at(index);
    palindromeStr = currChar + palindromeStr;
    console.log(palindromeStr);
  }
  if (palindromeStr === str) {
    return true;
  }
  return false;
}

document.getElementById("palindrome").textContent = palindrome(str);

module.exports = palindrome
