// Assign DOM elements to variables
var generateBtn = document.querySelector("#generate");
var numberOfCharactersText = document.getElementById('passwordLength');
var userInput = document.getElementsByName("userInput");
var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input text area
function writePassword() {
    //validate user entry
    var validationArray = validateInput();
    if (!validationArray[0]) {
        alert(validationArray[1]);
        return;
    }
    //generate and assign password
    var password = generatePassword(userInput[0].checked, userInput[1].checked, userInput[2].checked, userInput[3].checked, userInput[4].value);
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

function validateInput() {
    var isValid = true;
    var errorMessage = "";
    var isChecked = false;
    //check that at least one checkbox is checked
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i].checked) {
            isChecked = true;
        }
    }
    if (!isChecked) {
        errorMessage += "Select at least one checkbox option. ";
        isValid = false;
    }
    //check that password length input is between 8-128 characters
    if (!numberOfCharactersText.checkValidity()) {
        errorMessage += "Select a character value between 8 and 128.";
        isValid = false;
    }
    return [isValid, errorMessage];
}