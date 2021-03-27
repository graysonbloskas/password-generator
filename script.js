var lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "?", ">", "<", ":", ";", "[", "{", "]", "}"];

var userChar = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adds an event listener "clicl" to the site.
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var passwordLength = prompt("Enter the desired length of your password");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must contain at least 8 characters and a max of 128 characters");
    return;
  }

  else {
  var lower = confirm("Do you want to add lower case letters?");
  var upper = confirm("Do you want to add UPPER CASE LETTERS?");
  var num = confirm("Do you want to add numbers?");
  var spec = confirm("Do you want to add special characters?");


  if (lower) {
    userChar = userChar.concat(lowLetter);
    
  }
  
  if (upper) {
    userChar = userChar.concat(upLetter);
  
  }
  
  if (num) {
    userChar = userChar.concat(number);
  
  }
  
  if (spec) {
    userChar = userChar.concat(special);
  }
}
  var newString = "";

    for (i = 0; i < passwordLength ; ++i) {
      var index = Math.floor(Math.random() * userChar.length);
      newString += userChar[index];
    }
return newString;
  }
