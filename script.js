// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var char = ''
var Upcase = ''
var Lowcase = ''
var num = ''
var spec = ''
var charTypeNum = 0

// Function to prompt user for password options
function getPasswordOptions() {
  char= prompt('How many characters does the password need to be(can be between 10 to 64 characters')
  
  Upcase= confirm('Click OK if the password should contain upper case characters and Cancel if not')
  if (Upcase === true){
    charTypeNum += 1
  }
 

  Lowcase= confirm('Click OK if the password should contain lower case characters and Cancel if not')
  if (Lowcase === true){
    charTypeNum += 1
  }
 

  num= confirm('Click OK if the password should contain numbers and Cancel if not')
  if (num === true){
    charTypeNum += 1
  }
 

  var spec= confirm('Click OK if the password should contain special characters and Cancel if not')
  if (spec === true){
    charTypeNum += 1
  }
 
}

console.log(charTypeNum)
//make an array of the inputs and then write a for loop to generate a character for each until the number of characters are completed
// Function for getting a random element from an array
function getRandom(arr) {
  console.log(arr[(Math.floor(Math.random() * arr.length))])

}

// Function to generate password with user input
function generatePassword() {
  for (var i = 0; i < char;) { 
    
    console.log(i)
    if (Upcase === true && i < 10){
      getRandom(upperCasedCharacters)
      i++
      

    }

    console.log(i)
    if (Lowcase === true){
      getRandom(lowerCasedCharacters)
      i++
      

    
  }

  console.log(i)
  if (Lowcase === true && i < 10){
    getRandom(numericCharacters)
    i++
    

  
}

console.log(i)
if (Lowcase === true ){
  getRandom(specialCharacters)
  i++
  


}
  
  }
  

  
  }

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


getPasswordOptions();

console.log(char)
console.log(Upcase)
console.log(Lowcase)
console.log(num)
console.log(spec)




//pseudo code
/* i need to collect the inputs from the end user for the criteria for the password (Done)
then store these inputs (Done)
then generate characters based on these inputs
then put the characters together in one string
then print the string for the end user when they click the generate button */