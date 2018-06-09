/*
Author: Abraham Arslan
 */

'use strict';
//Constants
var PASSWORD_LENGTH = 12;
var USE_UPPERCASE = true;
var USE_NUMBERS = true;
var USE_SYMBOLS = true;


//Initialization for clipboard.js
$(document).ready(function(){
        //Initialize modal
        $('.modal').modal();

        //Initialize clipboard
        var clipboard = new Clipboard('.copy_password');
        clipboard.on('success', function(e) {
            M.toast({html: 'Password copied to clipboard!'})
        });
        clipboard.on('error', function(e) {
            console.log(e);
        });
});



//Generate random password
/*
Params: initialConfig : Object
    lowerCharacters: true/false,
    upperCharacters: true/false,
    numbers: true/false,
    symbols: true/false,
Returns: string Password
 */
function generatePassword(initialConfig) {
    var password = "";
    var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var symbols = ['!', '"', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    var passwordCharacters = lowerCharacters;
    var keys = [];
    console.log(initialConfig);
    for (const [key, value] of Object.entries(initialConfig)) {
        if(value)
        {
            keys.push(key);
            if(key === "lowerCharacters")
            {
                passwordCharacters = passwordCharacters.concat(lowerCharacters);
            }

            if(key === "upperCharacters") {
                passwordCharacters = passwordCharacters.concat(upperCharacters);
            }
            if(key === "numbers") {
                passwordCharacters = passwordCharacters.concat(numbers);
            }
            if(key === "symbols") {
                passwordCharacters = passwordCharacters.concat(symbols);
            }

        }
    }
    console.log(keys);
    var passwordArray = [];
    for (var i = 0; i < PASSWORD_LENGTH; i++) {
        passwordArray.push(passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]);
    };
    console.log("Length: " + passwordArray.length);
    password = passwordArray.join("");
    return password;
}