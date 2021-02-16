// Assignment Code
var generateBtn = document.querySelector("#generate");

// link charAmount slider and input box
const charAmtRange = document.getElementById
('charAmtRange')
const charAmtNumber = document.getElementById
('charAmtNumber')

// set const for checkbox values
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeNumbersElement = document.getElementById
('includeNumbers')
const includeSpecialCharElement = document.getElementById
('includeSpecialChar')

charAmtNumber.addEventListener('input', syncCharacterAmount)
charAmtRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
  const value = e.target.value
  charAmtNumber.value = value
  charAmtRange.value = value
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  const charAmtNumber = charAmtNumber.value
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecialChar)

