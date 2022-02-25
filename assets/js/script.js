// My code here

let generatePassword = function() {

    // set 4 arrays
    const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
    
    // empty array to add into for condition
    const database = [];

    // prompts the question on password length
    let userInput = prompt("Please choose a length between 8 to 128 characters");

    // user has to input number between 8 - 128
    if (userInput < 8 || userInput > 128) {
        alert("Error! Please choose a number between 8 and 128")
        userInput = prompt("Please choose a length between 8 to 128 characters")
    }

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
