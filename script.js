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


var Upcase = ''
var Lowcase = ''
var num = ''
var spec = ''
var password = ''




// Function to prompt user for password options
function getPasswordOptions() {

  
  
    for (;;) {  // infinite loop to ensure that the correct number of characters is entered
         char = prompt("How many characters does the password need to be(can be between 10 to 64 characters:");
      if (char >= 10 && char <= 64) {
      // the number is within the valid range, so we can exit the loop
        break;
      }
    // the number is not within the valid range, so we prompt the user to enter a different number
      alert("The number must be between 10 and 64. Please try again.");
  }
  
     Upcase= confirm('Click OK if the password should contain upper case characters and Cancel if not')
  
     Lowcase= confirm('Click OK if the password should contain lower case characters and Cancel if not')
  
     num= confirm('Click OK if the password should contain numbers and Cancel if not')
 
     spec= confirm('Click OK if the password should contain special characters and Cancel if not')
  
 
}


// Function for getting a random element from an array

function getRandom(arr) {
  
  password += (arr[(Math.floor(Math.random() * arr.length))])


}

// Function to generate password with user input
function generatePassword() {

  password = ''
  
  for (var i = 0; i < char;) { 
    
  
    

    if (Upcase === true && i < char){
    getRandom(upperCasedCharacters)
    
      i++
      
     

    }
    
    
    if (Lowcase === true && i < char){
     getRandom(lowerCasedCharacters)
     
      i++
      

    
  }

 
    if (num === true && i < char){
      getRandom(numericCharacters)
      
      i++
      
   
    
  
}


   if (spec === true && i < char ){
    getRandom(specialCharacters)
    
    i++
    
  


}



  
  }
  

  
  }

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  generatePassword();
  passwordText = document.querySelector('#password');
 
  passwordText.value = password;
  
  
  
  
}


getPasswordOptions();


// Add event listener to generate button

generateBtn.addEventListener('click', writePassword);


 








