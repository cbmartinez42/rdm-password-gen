// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables for password characters
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', "=", '>', '?', '@', '['];

// Write password to the #password input
function writePassword() {
  // prompt for user input and parse into a number
  let passLength = parseInt(prompt("How long would you like the password to be? (choose between 8-128)"));
  let validated = false
  // validate that an entry is made, is a number, and is between 8-128  
  while(!validated) {
    if(isNaN(passLength) || passLength < 8 || passLength > 128) {
      alert("Don't forget - Password length must be a number between 8 and 128. Please try again");
      validated = false
      passLength = parseInt(prompt("How long would you like the password to be? (choose between 8-128)"));
    } else {
      break
    }
  }
  
  // alert("Your password will have " + passLength + " characters");
  let contScript = confirm("Your password will have " + passLength + " characters. Continue?")
  if(!contScript) {
      return;
    }

  // set empty array to concat user choices into
  let passwordCharacters = [];

  // user must choose if they want lowercase, uppercase, numbers and/or symbols
  let confirmLowercase = confirm("Do you want lowercase letters included? Click OK for Yes, Cancel for No")  
  let confirmUppercase = confirm("Do you want UPPERCASE letters included? Click OK for Yes, Cancel for No")
  let confirmNumbers = confirm("Do you want numbers (1, 2, 3 ...) included? Click OK for Yes, Cancel for No")
  let confirmSymbols = confirm("Do you want symbols ($, %, & ...) included? Click OK for Yes, Cancel for No")

  // check that an entry was made
  if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSymbols) {
    alert("You must choose at least one option for character type to continue. Please try again.");
    return;
  }

  // take user choices and concat them
  if (confirmLowercase) passwordCharacters = passwordCharacters.concat(lowercase)
  if (confirmUppercase) passwordCharacters = passwordCharacters.concat(uppercase)
  if (confirmNumbers) passwordCharacters = passwordCharacters.concat(numbers)
  if (confirmSymbols) passwordCharacters = passwordCharacters.concat(symbols)

// empty string for passwordResults
let generatePassword = [];

// run to randomly generate password
for (let i = 0; i < passLength; i++)
  generatePassword = generatePassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];

  let password = generatePassword;
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
