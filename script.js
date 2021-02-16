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

const lowercaseCharCodes = arrayFromLowToHigh(97, 122)
const uppercaseCharCodes = arrayFromLowToHigh(65, 90)
const numberCharCodes = arrayFromLowToHigh(48, 57)
const specialCharCodes = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58,64)).concat(
  arrayFromLowToHigh(91, 96)).concat(
  arrayFromLowToHigh(123, 126))

charAmtNumber.addEventListener('input', syncCharacterAmount)
charAmtRange.addEventListener('input', syncCharacterAmount)

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  charAmtNumber.value = value
  charAmtRange.value = value
}

generateBtn.addEventListener('submit', e => {
  e.preventDefault()
  const charAmtNumber = charAmtNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSpecialChar = includeSpecialCharElement.checked
  const password = generatePassword(charAmtNumber, includeUppercase, includeNumbers, includeSpecialChar)

})

function generatePassword(charAmount, includeUppercase, includeNumbers, includeSpecialChar) {
  String.fromCharCode(65)
  let charCodes = lowercaseCharCodes
  if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes)
  if (includeNumbers) charCodes= charCodes.concat(numberCharCodes)
  if (includeSpecialChar) charCodes = charCodes.concat(specialCharCodes)
  console.log(lowercaseCharCodes)
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

