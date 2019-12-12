function createPassword() {

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

        // console.log(pwLength);
        // console.log(includeSpecial);
        // console.log(includeNum);
        // console.log(includeLower);
        // console.log(includeUpper);

        var special = ["!", "@", "#", "$", "%", "&", "*", "+", "="]
        var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

        var charArray = [];

        function pushIf(includeType, type) {
            if (includeType) {
                charArray.push.apply(charArray, type)
            }
        }

        pushIf(includeSpecial, special);
        pushIf(includeNum, num);
        pushIf(includeLower, lower);
        pushIf(includeUpper, upper);

        console.log(charArray);

        pwArray = [];

        for (var i = 0; i < pwLength; i++) {
            // console.log(charArray[Math.floor(Math.random() * charArray.length)]);
            var char = charArray[Math.floor(Math.random() * charArray.length)];
            pwArray.push(char);

        }
        var finalPW = pwArray.join("");
        document.getElementById("passwordInput").textContent = finalPW

    } else alert("You must enter a number between 8 and 128.`")

    copyToClip.addEventListener("click", function () {
        console.log(document.getElementById("passwordInput").value)
        var copyText = document.getElementById("passwordInput").select();
        document.execCommand("copy");
        alert("Copied the text");

    });
}