// Assignment Code
let generateBtn = document.querySelector("#generate");
// Definition of variables to store user preferences regarding password criteria
let userLength = 0;
let uppercase = true;
let lowercase = true;
let numeric = true;
let specialChar = true;
let string = "";

// Generate Password random characters
function generatePassword(){
  let result = "";
  for (i =0; i <= userLength; i++){
    let index = Math.floor(Math.random()*string.length - 1);
    result += string.charAt(index);
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt asking for a length. Verifies length is at least 8 and no more than 128 characters
function passwordLength (){
  userLength = window.prompt("Please specify the number of characters in your password")
  if(userLength < 8 || userLength > 128) {
    window.alert("The password must be at least 8 characters and no more than 128 characters")
    passwordLength();
  } prompts();
}
// Prompts for user preferences regarding password criteria
function prompts(){
  uppercase = window.confirm("click OK if you would like your password to include uppercases, click cancel otherwise")
  lowercase = window.confirm("click OK if you would like your password to include lowercases, click cancel otherwise")
  numeric = window.confirm("click OK if you would like your password to include numbers, click cancel otherwise")
  specialChar = window.confirm("click OK if you would like your password to include especial characters, click cancel otherwise")
  if (uppercase != true && lowercase != true && numeric != true && specialChar != true){
   window.alert("Please select at least one type of character")
   prompts() 
  }else if (uppercase && lowercase && numeric && specialChar){
    string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    generatePassword(0,userLength);
  }else if (uppercase && lowercase !=true && numeric && specialChar){
    string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$';
    generatePassword();
  }else if (uppercase != true && lowercase !=true && numeric && specialChar){
    string = '0123456789@#$';
    generatePassword();
  }else if (uppercase !=true && lowercase !=true && numeric != true && specialChar){
    string = '@#$';
    generatePassword();
  }else if (uppercase && lowercase && numeric && specialChar != true){
    string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    generatePassword();
  }else if (uppercase && lowercase && numeric !=true && specialChar !=true){
    string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    generatePassword();
  }else if (uppercase !=true && lowercase && numeric !=true && specialChar !=true){
    string = 'abcdefghijklmnopqrstuvwxyz';
    generatePassword();
  }else if(uppercase && lowercase && numeric !=true && specialChar){
    string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$';
    generatePassword();
  }else if (uppercase != true && lowercase && numeric !=true && specialChar){
    string = 'abcdefghijklmnopqrstuvwxyz@#$';
    generatePassword();
  }else if (uppercase !=true && lowercase && numeric && specialChar){
    string = 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    generatePassword();
  }else if (uppercase != true && lowercase !=true && numeric && specialChar !=true){
    string = '0123456789';
    generatePassword();
  }else if (uppercase && lowercase !=true && numeric !=true && specialChar !=true){
    string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    generatePassword();
  }else {
    string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    generatePassword();
  }
  return;
}

passwordLength();


















// function activatePrompts() {
//   let length = window.prompt("Please specify a length for your password");
//   if(length < 8 || length > 128){
//     window.alert("your password should be larger than 8 and shorter than 129 characters")
//     activatePrompts()
//   }let confirmLength = window.confirm("you would like a password that is "+length+" characters long, is this correct?")

//   if (confirmLength){
//      let lowercase = window.confirm ("Would you like your password to include lowercase characters?")
//      let uppercase = window.confirm ("Would you like your password to include uppercase characters?")
//      let numeric = window.confirm ("Would you like your password to include numbers?")
//      let specialChar = window.confirm ("Would you like your password to include special characters?")
//      if(lowercase && uppercase && numeric && specialChar){
//       //  include ALL
//      }else if (lowercase !=true && uppercase && numeric && specialChar){
//       // Not Lowercase 
//      }else if (lowercase !=true && uppercase != true && numeric && specialChar){
//       //  Not lowercase nor uppercase
//      }else if (lowercase !=true && uppercase != true && numeric !=true && specialChar ){
//       //  Only Special Characters
//      }else if (lowercase !=true && uppercase != true && numeric !=true && specialChar !=){
//        window.alert("Your password must contain at least one type of character")
//        activatePrompts();
//      }else if (lowercase && uppercase && numeric && specialChar !=true){
//         // Not Special Characters
//      }else if (lowercase && uppercase && numeric !=true && specialChar !=true){
//       //  Not special characters nor numeric
//      }else if (lowercase && uppercase !=true && numeric != true && specialChar !=true){
//       //  Only lowercase
//      }else if(lowercase && uppercase && numeric !=true && specialChar){
//       //  Not numeric
//      }else if (lowercase && uppercase !=true && numeric !=true && specialChar){
//       //  Not uppercase nor numeric
//      }else if (lowercase && uppercase != true && numeric && specialChar){
//       //  not uppercase
//      }else if (lowercase !=true && uppercase !=true && numeric && specialChar){
//       //  Not lowercase nor uppercase
//      }else if (lowercase !=true && uppercase && numeric !=true && specialChar !=true){
//       //  Only uppercase
//      }else{
//       //  Not lowercase nor special char
//      }
//   }activatePrompts();

// }






// // Write password to the #password input
// function writePassword() {
//   let password = generatePassword(){
//     let con = "";
//     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
//     'abcdefghijklmnopqrstuvwxyz0123456789@#$';
//     For (i = 0; i<=8; i++){
//       let pos = Math.floor(Math.random()*str.lenght + 1);
//       con[i] = str.charAt(pos)
//     }
//     return con;
//   };
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }


// generateBtn.addEventListener("click", activatePrompts);
// activatePrompts();
