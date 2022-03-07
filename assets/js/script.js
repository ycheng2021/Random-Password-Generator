// My code here
// set 4 arrays
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

let userInput;

function questions() {
    
    // empty array to add into for condition
    let database = [];

     // prompts the question on password length
     userInput = prompt("Please choose a length between 8 to 128 characters");

     // user has to input number between 8 - 128
     if (userInput < 8 || userInput > 128) {
         alert("Error! Please choose a number between 8 and 128")
         userInput = prompt("Please choose a length between 8 to 128 characters")
     }
 
     // ask if user wants lowercase
     let yesLower = window.confirm("Would you like to include lowercase letters?");
     if (yesLower) {
         database.push(...lowercase)
     }
     // ask if user wants uppercase
     let yesUpper = window.confirm("Would you like to include uppercase letters?");
     if (yesUpper) {
         database.push(...uppercase)
     }
     // ask if user wants numbers
     let yesNum = window.confirm("Would you like to include numbers?");
     if (yesNum) {
         database.push(...numbers)
     }
     // ask if user wants special characters
     let yesSpecial = window.confirm("Would you like to include special characters?");
     if (yesSpecial) {
         database.push(...specials)
     }
 
     if (!yesLower && !yesUpper && !yesNum && !yesSpecial) {
         alert("Error! Please choose at least one character type.")
         return false;
     } 

     return database
}

let generatePassword = function() {

    var conditions = questions();

    if (conditions === false) {
        conditions = questions();
    }

    // set variable to use for index for randomizing
    // set up another array to hold generated random characters
    let genCharacters = [];
    // for loop that will take all above info and generate a string
    for (let i=0; i< userInput; i++) {
        let randomNum = Math.floor(Math.random() * conditions.length-1)
        genCharacters.push(conditions[randomNum]);
    }
    // join array and return password
    let outputPassword = genCharacters.join('');

    return outputPassword;
    
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
