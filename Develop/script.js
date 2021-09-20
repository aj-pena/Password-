// Assignment Code
let generateBtn = document.querySelector("#generate");
let userLength = 0;

// Generate Password
function generatePassword(){
  let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
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

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt asking for a length. Verifies length is at least 8 and no more than 128 characters
function passwordLength (){
  userLength = window.prompt("Please specify the number of characters in your password")
  if(userLength < 8 || userLength > 128){
    window.alert("The password must be at least 8 characters and no more than 128 characters")
    passwordLength();
  } generatePassword();
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
