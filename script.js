// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables for password characters
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[']
// symbols that begin an error string
// , '\', ']', '^', '_', '`', '{', '|', '}', '~'

// Write password to the #password input
function writePassword() {
  // user must choose length (8-128 characters)
  var passLength = prompt("How long would you like the password to be? (choose between 8-128)");

  // validate that an entry is made, is a number, and is between 8-128  
  while(true) {
    if(passLength == "") {
      alert('Please enter a number between 8 and 128');
      var passLength = prompt("How long would you like the password to be? (choose between 8-128)");
    } else if(passLength !== Number.Integer) {
      alert("Hey now - Password length must be a NUMBER between 8 and 128. Please try again");
      var passLength = prompt("How long would you like the password to be? (choose between 8-128)");
    }
    else if(passLength < 8 || passLength > 128);
    alert("Don't forget - Password length must be a number BETWEEN 8 and 128. Please try again");
    var passLength = prompt("How long would you like the password to be? (choose between 8-128)");

    // how do I make this alert show if the while statement returns all false?
    // alert("I'm sorry, but you must choose a number between the range of 8 and 128. Please double check your entry and click 'Generate Password' again");
    break
  }

    alert("Your password will have " + passLength + " characters")


  // // validate that a entry is made
  // while ((passLength === "") === true) {

  // } 
  // // validate that entry is a number
  // while (Number.isInteger(passLength) === false) {
  //   if (Number.isInteger(passLength) === true) {
  //     break;
  //   }

  // } 
  //   // validate if it's between 8 and 128
  // while (passLength < 8 || passLength > 128) {

  // } 

  
  // user must choose if they want lowercase
  var confirmLowercase = confirm("Do you want lowercase letters included? Click OK for Yes, Cancel for No")  
  // user must choose if they want uppercase
  var confirmUppercase = confirm("Do you want UPPERCASE letters included? Click OK for Yes, Cancel for No")
  // user must choose if they want numbers
  var confirmNumbers = confirm("Do you want numbers (1, 2, 3 ...) included? Click OK for Yes, Cancel for No")
  // user must choose if they want symbols
  var confirmSymbols = confirm("Do you want symbols ($, %, & ...) included? Click OK for Yes, Cancel for No")

  if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSymbols) {
    alert("You must choose at least one option for character type to continue. Please try again.");
    return;
  }

  // set empty array to concat user choices into
  var passwordCharacters = []

  // take user choices and concat them
if (confirmLowercase) {
  passwordCharacters = passwordCharacters.push(lowercase)
  } 
  
  if (confirmUppercase) {
  passwordCharacters = passwordCharacters.push(uppercase)
  } 
  
  if (confirmNumbers) {
  passwordCharacters = passwordCharacters.push(numbers)
  } 
  
  if (confirmSymbols) {
  passwordCharacters = passwordCharacters.push(symbols)
  }
 
// empty string for passwordResults
var passwordResults = ""

for (var i = 0; i < passLength; i++)
  passwordResults = passwordResults + passwordCharacters[Math.floor(Math.random() * passLength)];

console.log(passwordResults)


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
