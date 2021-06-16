// Assign generate button to variable
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input text area
function writePassword() {
    //get elements from HTML
    var userInput = document.getElementsByName("userInput");
    var passwordText = document.querySelector("#password");
    //password options for clarity
    var lowercase = userInput[0].checked;
    var uppercase = userInput[1].checked;
    var numeric = userInput[2].checked;
    var specialCharacters = userInput[3].checked;
    var numberOfCharacters = userInput[4].value;
    //generate and assign password
    var password = generatePassword(lowercase, uppercase, numeric, specialCharacters, numberOfCharacters);
    passwordText.value = password;
}

// generate password and return
function generatePassword(lowercase, uppercase, numeric, specialCharacters, numberOfCharacters) {
    //password to be generated in function
    var selectedCharacterSet = "";
    //character set options as strings
    var lowerSet = "abcdefghijklmnopqrstuvwxyz";
    var upperSet = lowerSet.toUpperCase();
    var numericSet = "0123456789";
    var specialSet = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    //create character set password will be generated from
    if (lowercase) {
        selectedCharacterSet += lowerSet;
    }
    if (uppercase) {
        selectedCharacterSet += upperSet;
    }
    if (numeric) {
        selectedCharacterSet += numericSet;
    }
    if (specialCharacters) {
        selectedCharacterSet += specialSet;
    }
    //generate password
    var generatedPassword = "";
    var pseudoRandomNumber;
    for (let i = 0; i < numberOfCharacters; i++) {
        //generate a random number between 0-1, multiply it by the number of available characters, round it down to the nearest integer
        pseudoRandomNumber = Math.floor(Math.random() * selectedCharacterSet.length);
        //append pseudo random character to password string
        generatedPassword += selectedCharacterSet.charAt(pseudoRandomNumber);
    }
    return generatedPassword;
}



//THEN I choose a length of at least 8 characters and no more than 128 characters
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//THEN my input should be validated and at least one character type should be selected