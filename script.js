// Assignment Code
// declaring an object to store different characters
const collection = {
  lowercase : "qwertyuiopasdfghjklzxcvbnm" ,
  uppercase : "QWERTYUIOPASDFGHJKLZXCVBNM" ,
  numeric : "1234567890" ,
  specialCharacters : " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
};

var generateBtn = document.querySelector("#generate");


// generatePassword function expression
const generatePassword = function(){
  const charactersArray = []; // to store all selected characters
  let passwordLength = 0;

  // do-while loop for entering password length
  do {
    passwordLength = parseInt(window.prompt("Choose the LENGTH of the password: (Note: Enter a number between 8 and 128)"));
    console.log(typeof passwordLength);
    console.log(passwordLength);
    if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
      alert("Choose a valid input!");  
    }else {
      window.alert("You chose a length of " + passwordLength + " characters!");
    }
  } while(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength));

  // do-while loop for choosing password criteria
  do{ 
    if(window.confirm("would you like to include LOWERCASE characters? (Press OK to include or Cancel to exclude.)")){
      charactersArray.push(collection.lowercase);
      window.alert("Lowercase characters are included!");
      console.log(charactersArray.toString());
    }
    if(window.confirm("would you like to include UPPERCASE characters? (Press OK to include or Cancel to exclude.)")){
      charactersArray.push(collection.uppercase);
      window.alert("Uppercase characters are included!");
      console.log(charactersArray.toString());
    }
    if(window.confirm("would you like to include NUMERIC characters? (Press OK to include or Cancel to exclude.)")){
      charactersArray.push(collection.numeric);
      window.alert("Numeric characters are included!");
      console.log(charactersArray.toString());
    }
    if(window.confirm("would you like to include SPECIAL characters? (Press OK to include or Cancel to exclude.)")){
      charactersArray.push(collection.specialCharacters);
      window.alert("Special characters are included!");
      console.log(charactersArray.toString());
    }
    if(charactersArray.length == 0){
      alert("Please select atleast one type of character!")
    }
  } while(charactersArray.length == 0);

  let charactersIncluded = charactersArray.join(''); // converting charactersArray to a string

  console.log(charactersIncluded);
  let passwordArray =[];  // array for storing password

  //'for loop' for selecting random characters to generate password
  for(let i=0; i<passwordLength ; i++){
    index = Math.floor(Math.random() * charactersIncluded.length);
    passwordArray.push(charactersIncluded[index]);
  } 

  return passwordArray.join(''); // returning the array as a string

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
