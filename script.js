



var alphaCapChar = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
var alphaLowChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
    
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    "."
];




// function to prompt user for password options

function getPasswordOptions() {
    // length character variable
    var length = parseInt(prompt("Please choose your Password Length"));

    if (isNaN(length) === true) {
        alert("Please pick a real number");
        return;
    }

    if (length < 8) {
        alert("Please choose a value of 8 or higher");
        return;
    }

    if (length > 128) {
        alert("Please choose a value lower than 128");
        return;
    }

    // special character variable
    var hasSpecial = confirm("Would you like to add special characters?");
    // uppercase character variable
    var hasUpperCase = confirm("Would you like to add uppercase letters");
    // lowercase character variable
    var hasLowerCase = confirm("Would you like to add lowercase letters");
    // lowercase character variable
    var hasNum = confirm("Would you like to add numbers?");

    // Conditional statement to make sure user picks one type of character. 

    if (
      
        hasNum === false &&
        hasLowerCase === false &&
        hasSpecial === false &&
        hasUpperCase === false
    ) {
        alert("Pick at least one character type");
        return;
    }
   
    // Object to store user input

    var passwordOptions = {
        length: length,
        hasSpecial : hasSpecial,
        hasNum : hasNum,
        hasLowerCase : hasLowerCase,
        hasUpperCase : hasUpperCase
    };
        return passwordOptions;
}


// Function for getting a random element from an array

function getRandom(randomString) {
    var randIndex = Math.floor(Math.random() * randomString.length);
    var randElement = randomString[randIndex];

    return randElement;
}

// Function to generate password with user input

function generatePassword() {
    var options = getPasswordOptions();

    var result = [];

    var possibleCharacters = [];

    var guaranteedCharacters = [];


    if (options.hasSpecial) {
        possibleCharacters = possibleCharacters.concat(specialChar);
        guaranteedCharacters.push(getRandom(specialChar));
    }
    if (options.hasLowerCase) {
        possibleCharacters = possibleCharacters.concat(alphaLowChar);
        guaranteedCharacters.push(getRandom(alphaLowChar));
    }
    if (options.hasUpperCase) {
        possibleCharacters = possibleCharacters.concat(alphaCapChar);
        guaranteedCharacters.push(getRandom(alphaCapChar));
    }
    if (options.hasNum) {
        possibleCharacters = possibleCharacters.concat(numericChar);
        guaranteedCharacters.push(getRandom(numericChar));
    }

for (var i = 0; i <options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters)

    result.push(possibleCharacter);
}

for(var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
}

return result.join("");

}

var generateBtn = document.querySelector("#generate");
var copyPassword = document.querySelector("#copy");

function writePassword () {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

     //
     //
    
}

function copyToClipboard() {
    document.execCommand("copy");

    alert(
        "Your password " + passwordText.value + " was copied to your clipboard."
    );
}

generateBtn.addEventListener("click", writePassword);
copyPassword.addEventListener("click", copyToClipboard);


