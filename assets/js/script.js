// My code here

let generatePassword = function() {

    // set 4 arrays

    // empty array to add into for condition

    // prompts the question on password length

    // user has to input number between 8 - 128

    // ask if user wants lowercase

    // ask if user wants uppercase

    // ask if user wants numbers

    // ask if user wants special characters

    // set variable to use for index for randomizing
    // set up another array to hold generated random characters

    // for loop that will take all above info and generate a string

    // join array and return password

}

// Starting code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
