// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables for password characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[']
// symbols that begin an error string
// , '\', ']', '^', '_', '`', '{', '|', '}', '~'

// Write password to the #password input
function writePassword() {
  // user must choose length (8-128 characters)
var passLength = prompt("How long would you like the password to be? (choose between 8-128");
// validate if it's a number
// validate if it's between 8 and 128
    if (isNaN(passLength) !== false) {
      alert("Password length must be a NUMBER between 8 and 128. Please try again");
      var passLength = prompt("How long would you like the password to be? (choose between 8-128)");
    } else if (enter < "8" || enter > "128") {
      alert("Password length must be a number BETWEEN 8 and 128. Please try again");
      var passLength = prompt("How long would you like the password to be? (choose between 8-128)");
    } else {
      alert("Your password will have " + passLength + " characters")
    }


// user must choose if they want uppercase
var upperCase = window.confirm("Do you want UPPERCASE letters included?")
// user must choose if they want numbers
var numbers = window.confirm("Do you want numbers (1, 2, 3 ...) included?")
// user must choose if they want symbols
var symbols = window.confirm("Do you want symbols ($, %, & ...) included?")

var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
