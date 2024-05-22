// class Password {
//     constructor() {
//         console.log("Welcome to Password Generator")
//         this.pass = ""
//     }

//     generatePassword(len){
//         let char = "abcdefghijklmnopqrstuvwxyz"
//         let numbers = "1234567890"
//         let special = "!@#$%^&*()"
//         if (len < 3) {
//             console.log("Your Password should be atleast 3 Characters long")
//         }
//         else{
//             let i = 0;
//             while (i < len) {
//                 this.pass += char[Math.floor(Math.random() * char.length)]
//                 this.pass += numbers[Math.floor(Math.random() * numbers.length)]
//                 this.pass += special[Math.floor(Math.random() * special.length)]
//                 i += 3
//             }
//             this.pass = this.pass.substr(0, len)
//             return this.pass;
//         }
//     }
// }

// let p = new Password()
// console.log(p.generatePassword(5))

document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const passwordDisplay = document.getElementById('passwordDisplay');
    const lengthInput = document.getElementById('length'); // New input field

    generateBtn.addEventListener('click', function () {
        const passwordLength = parseInt(lengthInput.value); // Get the user-specified length
        const password = generatePassword(passwordLength);
        passwordDisplay.innerHTML = `Generated Password: <strong>${password}</strong>`;
    });

    function generatePassword(len) {
        let char = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "1234567890";
        let special = "!@#$%^&*()";
        let pass = ""; // Initialize the password variable

        if (len < 3) {
            return "Your Password should be at least 3 characters long";
        } else {
            let i = 0;
            while (i < len) {
                pass += char[Math.floor(Math.random() * char.length)];
                pass += numbers[Math.floor(Math.random() * numbers.length)];
                pass += special[Math.floor(Math.random() * special.length)];
                i += 3;
            }
            pass = pass.substr(0, len);
            return pass;
        }
    }
});
