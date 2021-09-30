// Assignment Code
let generateBtn = document.querySelector("#generate")
// Definition of variables to store user preferences regarding password criteria
let begin = true
let userLength = 0
let uppercase = true
let lowercase = true
let numeric = true
let specialChar = true
let stringUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let stringLower = 'abcdefghijklmnopqrstuvwxyz'
let stringNumeric = '0123456789'
let stringSpecial = '@#$,!_-*()'
let string = '' 

// Prompt asking for a length. Verifies length is at least 8 and no more than 128 characters
function passwordLength (){
  userLength = window.prompt("Please specify the number of characters in your password")
  if(userLength != null && userLength < 8 || userLength > 128) {
    window.alert("The password must be at least 8 characters and no more than 128 characters")
    passwordLength();
  }else if (userLength = null){
    window.alert('No problem! Bye.')
    return
  } else{ prompts();}
}
// Prompts for user preferences regarding password criteria
function prompts(){
  uppercase = window.confirm("click OK if you would like your password to include uppercases, click cancel otherwise")
  lowercase = window.confirm("click OK if you would like your password to include lowercases, click cancel otherwise")
  numeric = window.confirm("click OK if you would like your password to include numbers, click cancel otherwise")
  specialChar = window.confirm("click OK if you would like your password to include especial characters, click cancel otherwise")
  // YES UPPERCASE
  if (uppercase){
    string = stringUpper
    // YES UPPERCASE & LOWERCASE
    if (lowercase){
      string += stringLower;
      // YES UPPERCASE & LOWERCASE & NUMERIC
      if (numeric){
        string += stringNumeric;        
        // YES ALL
        if (specialChar){
          string += stringSpecial;
          console.log(string)
          return
          } return                //NO SPECIAL CHARACTERS 
        // YES UPPERCASE YES LOWERCASE NO NUMERIC
      }else if (specialChar){
          string += stringSpecial; //NO NUMERIC
          return
        }else {return} //UPPERCASE AND LOWERCASE
        // YES UPPERCASE NO LOWERCASE
    }else if (numeric){
      string += stringNumeric; //UPPERCASE & NUMERIC       
      if (specialChar){
        string += stringSpecial; //UPPERCASE & NUMERIC & SPECIAL CHAR
        return // NO LOWERCASE
      }return //UPPERCASE & NUMERIC
      // YES UPPERCASE NO LOWERCASE NO NUMERIC
    }else if (specialChar){
      string += stringSpecial; // UPPERCASE & SPECIAL CHAR
      return
      }else {return} //ONLY UPPERCASE
      // NO UPPER CASE
  } else if (lowercase){
    string = stringLower; //YES LOWERCASE
    if (numeric){
      string += stringNumeric; //LOWERCASE & NUMERIC        
      if (specialChar){
        string += stringSpecial; //LOWERCASE & NUMERIC & SPECIAL CHAR
        return
      } return//LOWERCASE & NUMERIC
      // NO UPPERCASE, YES LOWERCASE, NO NUMERIC
    }else if (specialChar){
      string += stringSpecial; // LOWECASE & SPECIAL CHARACTERS
      return 
      }else {return } // ONLY LOWERCASE
      // NO UPPERCASE NO LOWERCASE
  }else if (numeric){
    string = stringNumeric;  //NUMERIC      
    if (specialChar){
      string += stringSpecial; // NUMERIC & SPECIAL CHAR
      return
    }return //ONLY NUMERIC
    // NO UPPER NO LOWER NO NUMERIC
  }else if (specialChar){
    string = stringSpecial; //ONLY SPECIAL CHAR
    return 
  } else {
    window.alert("you must select at least one type of character")
    prompts()
  }
  return
}


// Generate Password random characters
function generatePassword(){
  let result = "";
  let index = 0
  for (i =0; i < userLength; i++){
    index = Math.floor(Math.random()*string.length - 1);
    
    result += string.charAt(index);
  }
  console.log(string)
  console.log(result)
  return result;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password)
return;
}

passwordLength()