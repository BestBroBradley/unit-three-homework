var pwLength = prompt("How many characters would you like to use?\n\nEnter a number between 8 and 128.")

if (pwLength >= 8 && pwLength <= 128) {
    var includeSpecial = confirm("Would you like to include special characters?")
    var includeNum = confirm("Would you like to include numerals?")
    var includeLower = confirm("Would you like to include lowercase letters?")

    if (includeSpecial === true || includeNum === true || includeLower === true) {
        var includeUpper = confirm("Would you like to include uppercase letters?")
    } else {
        alert("Your password will contain upper case letters only.")
        var includeUpper = true;
    }

    console.log(pwLength);
    console.log(includeSpecial);
    console.log(includeNum);
    console.log(includeLower);
    console.log(includeUpper);

    var characters = {
        special: ["!", "@", "#", "$", "%", "&", "*", "+", "="],
        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    }
} else alert("Please refresh the page and enter a number between 8 and 128.")