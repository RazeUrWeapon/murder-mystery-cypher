const key = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const cipherBtn = document.getElementById('cipherbtn');
const cipherSelection = document.querySelector('.cipher-selection');
const cipherContainer = document.querySelector('.cipher-container');
const decipherSelection = document.querySelector('.decipher-selection');
const decipherContainer = document.querySelector('.decipher-container');
let cipherText = '';
let decipherText = '';

function cipher() {
    const userInput = document.getElementById('ciphertext').value;
    let cipherArr = [];
    
    for (i = 0; i < userInput.length; i++) {
        if (i % 2 === 0) {
            let letter = userInput.charAt(i).toUpperCase();
            let findIndex = (key.indexOf(letter));

            if (findIndex < 0) {
                cipherArr.push(' ');
                i = i--;
            } else {
                let codedIndex = ((findIndex - 1) + 26) % 26;
                let codedLetter = key[codedIndex];
                cipherArr.push(codedLetter);
            }
        } else {
            letter = userInput.charAt(i).toUpperCase();
            findIndex = (key.indexOf(letter));

            if (findIndex < 0) {
                cipherArr.push(' ');
                i = i--;
            } else {
                codedIndex = (findIndex + 9) % 26;
                codedLetter = key[codedIndex];
                cipherArr.push(codedLetter);
            }
        }
    }
    cipherText = cipherArr.join('');
    document.getElementById('cipher-output').innerHTML = cipherText;
}

function decipher() {
    const cipheredText = document.getElementById('deciphertext').value;
    let decipherArr = [];

    for (i = 0; i < cipheredText.length; i++) {
        if (i % 2 === 0) {
            let letter = cipheredText.charAt(i).toUpperCase();
            let findIndex = (key.indexOf(letter));

            if (findIndex < 0) {
                decipherArr.push(' ');
                i = i--;
            } else {
                let codedIndex = (findIndex + 1) % 26;
                let codedLetter = key[codedIndex];
                decipherArr.push(codedLetter);
            }
        } else {
            letter = cipheredText.charAt(i).toUpperCase();
            findIndex = (key.indexOf(letter));

            if (findIndex < 0) {
                decipherArr.push(' ');
                i = i--;
            } else {
                codedIndex = ((findIndex - 9) + 26) % 26;
                codedLetter = key[codedIndex];
                decipherArr.push(codedLetter);
            }
        }
    }
    decipherText = decipherArr.join('');
    document.getElementById('decipher-output').innerHTML = decipherText;
}

// function enterKey(e) {
//     if (e.key === 'Enter') cipher();
// }

// Select if Cipher or Decipher is shown on page
function selectCipher() {
    if (cipherSelection.classList.contains('unselected')) {
        cipherSelection.classList.remove('unselected');
        cipherSelection.classList.add('selected');
        decipherSelection.classList.remove('selected');
        decipherSelection.classList.add('unselected');
    }
}

function selectDecipher() {
    if (decipherSelection.classList.contains('unselected')) {
        decipherSelection.classList.remove('unselected');
        decipherSelection.classList.add('selected');
        cipherSelection.classList.remove('selected');
        cipherSelection.classList.add('unselected');
    }
}

// Show which cipher is selected
function showCipher() {
    if (cipherContainer.classList.contains('hide')) {
        cipherContainer.classList.remove('hide');
        decipherContainer.classList.add('hide');
    }
}

function showDecipher() {
    if (decipherContainer.classList.contains('hide')) {
        decipherContainer.classList.remove('hide');
        cipherContainer.classList.add('hide');
    }
}


// Listen for clicks on buttons
cipherBtn.addEventListener('click', cipher);
// window.addEventListener('keydown', enterKey);
document.getElementById('decipherbtn').addEventListener('click', decipher);

// Show cipher option
cipherSelection.addEventListener('click', selectCipher);
cipherSelection.addEventListener('click', showCipher);
decipherSelection.addEventListener('click', selectDecipher);
decipherSelection.addEventListener('click', showDecipher);