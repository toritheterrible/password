var specialChar = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
  ];

  var numbersChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Z"];

  
  
  function getPasswordOptions() {
    
   var hasSpecialChar = document.getElementById("hasSpecialChar").checked;
   var hasUpperCaseChar = document.getElementById("hasUpperCaseChar").checked;
   var hasLowerCaseChar = document.getElementById("hasLowerCaseChar").checked;
   var hasNumbersChar = document.getElementById("hasNumbersChar").checked;
   var length = document.getElementById("length").value;
   
   var passwordOptions = {
    length: length,
    hasSpecialChar : hasSpecialChar,
    hasNumbersChar: hasNumbersChar,
    hasLowerCaseChar: hasLowerCaseChar,
    hasUpperCaseChar: hasUpperCaseChar
};

return passwordOptions;
  }
  
  function getRandom(randomString) {
var randIndex = Math.floor(Math.random() * randomString.length);
var randElement = randomString[randIndex];

return randElement;
}
function generatePassword() {
var options = getPasswordOptions();

var result = [];

var possibleCharacters = [];

var guaranteedCharacters = [];


if (options.hasSpecialChar) {
    possibleCharacters = possibleCharacters.concat(specialChar);
    guaranteedCharacters.push(getRandom(specialChar));
}
if (options.hasLowerCaseChar) {
    possibleCharacters = possibleCharacters.concat(lowerCaseChar);
    guaranteedCharacters.push(getRandom(lowerCaseChar));
}
if (options.hasUpperCaseChar) {
    possibleCharacters = possibleCharacters.concat(upperCaseChar);
    guaranteedCharacters.push(getRandom(upperCaseChar));
}
if (options.hasNumbersChar) {
    possibleCharacters = possibleCharacters.concat(numbersChar);
    guaranteedCharacters.push(getRandom(numbersChar));
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
var passwordText = document.querySelector("#password");
passwordText.select();
document.execCommand("copy");

alert(
    "Your password " + passwordText.value + " was copied to your clipboard."
);
}

generateBtn.addEventListener("click", writePassword);
copyPassword.addEventListener("click", copyToClipboard);


