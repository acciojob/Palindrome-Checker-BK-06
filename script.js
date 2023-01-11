const str = window.prompt();
//const str = 'racecar';
function palindrome(str) {
  let palindromeStr = "";
  for (let index = 0; index < str.length; index++) {
    let currChar = str.at(index);
    palindromeStr = currChar + palindromeStr;
    //console.log(palindromeStr);
  }
  if (palindromeStr === str) {
    console.log('true');
  } else{
    console.log('false');
  }

}

//palindrome(str)
module.exports = palindrome