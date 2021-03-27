// These set the strings that the password generator will pull from. 
// GLOBAL ARRAYS
var lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "?", ">", "<", ":", ";", "[", "{", "]", "}"];

// this variable sets the final user password
var userChar = [];

// query selector ties into the id=generate in the html. This allows the generate button to function. 
var generateBtn = document.querySelector("#generate");

// this function ties into the password id in the html, and runs the generate password. 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Adds an event listener "click" to the site.
generateBtn.addEventListener("click", writePassword);

// this defines the generate password function. 
function generatePassword() {

// this prompts the user to enter a desired length for their password. 
  var passwordLength = prompt("Enter the desired length of your password");
  // this sets the password length to be between 8 and 128 characters.
  // the alert alerts them if they enter a non valid number of characters. 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must contain at least 8 characters and a max of 128 characters");
    return "follow the instructions pls";
  }
// this prevents the user from typing in anything other than a numeric value when they are prompted to choose a password length. 
  if (isNaN(parseInt(passwordLength))) {
    alert("You must enter a number to specify your desired length");
    return "nice try"
  }
  // this asks the user to confirm the types of characters they want to add to their password. 
  else {
  var lower = confirm("Do you want to add lower case letters?");
  var upper = confirm("Do you want to add UPPER CASE LETTERS?");
  var num = confirm("Do you want to add numbers?");
  var spec = confirm("Do you want to add special characters?");

// these if functions combine the userChar array with the global arrays.
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
// this creates a new string, which is blank - to be populated by the random generator. 
  var securePass = "";
// this for loop is the randomizer for the generator, and creates the password. 
    for (i = 0; i < passwordLength; i++) {
      var index = Math.floor(Math.random() * userChar.length);
      securePass += userChar[index];
    }
    // this populates the securePass string created above, and is the final password that is generated. 
return securePass;
  
}
