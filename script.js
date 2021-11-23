const key = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function secretCode() {
    const userInput = prompt('Want to hide something?');
    let msgArr = [];
    
    for (i = 0; i < userInput.length; i++) {
        if (i % 2 === 0) {
            let letter = userInput.charAt(i).toUpperCase();
            let findIndex = (key.indexOf(letter));

            if (findIndex < 0) {
                msgArr.push(' ');
                i = i--;
            } else {
                let codedIndex = ((findIndex - 1) + 26) % 26;
                let codedLetter = key[codedIndex];
                msgArr.push(codedLetter);
            }
        } else {
            letter = userInput.charAt(i).toUpperCase();
            findIndex = (key.indexOf(letter));

            if (findIndex < 0) {
                msgArr.push(' ');
                i = i--;
            } else {
                codedIndex = (findIndex + 9) % 26;
                codedLetter = key[codedIndex];
                msgArr.push(codedLetter);
            }
        }
    }

    let cypher = msgArr.join('');
    console.log(userInput.toUpperCase());
    console.log(cypher);
}

function decypher() {
    const cypheredText = prompt('Are you sure you want to know the truth?');
    let cypherArr = [];

    for (i = 0; i < cypheredText.length; i++) {
        if (i % 2 === 0) {
            let letter = cypheredText.charAt(i).toUpperCase();
            let findIndex = (key.indexOf(letter));

            if (findIndex < 0) {
                cypherArr.push(' ');
                i = i--;
            } else {
                let codedIndex = (findIndex + 1) % 26;
                let codedLetter = key[codedIndex];
                cypherArr.push(codedLetter);
            }
        } else {
            letter = cypheredText.charAt(i).toUpperCase();
            findIndex = (key.indexOf(letter));

            if (findIndex < 0) {
                cypherArr.push(' ');
                i = i--;
            } else {
                codedIndex = ((findIndex - 9) + 26) % 26;
                codedLetter = key[codedIndex];
                cypherArr.push(codedLetter);
            }
        }
    }

    let decypher = cypherArr.join('');
    console.log(decypher);
}