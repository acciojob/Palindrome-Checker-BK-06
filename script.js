// complete the given function

const viewEl = document.getElementById("palindrome");
const inputEl = document.getElementById("str");
const SubmitBtn = document.getElementById("submit");
SubmitBtn.addEventListener("click", (e) => {
  viewEl.innerText = palindrome(inputEl.value);
});

function palindrome(str) {
  let palindromeStr = "";
  for (let index = 0; index < str.length; index++) {
    let currChar = str.at(index);
    palindromeStr = currChar + palindromeStr;
    //console.log(palindromeStr);
  }
  if (palindromeStr === str) {
    return true;
  }
  return false;
}

module.exports = palindrome
