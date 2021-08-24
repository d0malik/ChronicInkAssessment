export function encryptCaesar(inputString, key) {
    // This algorithm implies only capital letters are used, because that is all that is in the example.
    inputString = inputString.toUpperCase();

    let arr = [];
    for (let i = 0; i < inputString.length; i++) {
        // We reduce the shift to the smallest possible value by taking the remainder.
        // Shifting 29 letters would be the same as 3 because we are overlapping the entire alphabet.
        // e.g. shift of 29 reduced to 3 because there are 26 letters in the alphabet
        let char = inputString[i].charCodeAt() + (key % 26);
        if (char > 90) {
            char = (char - 91) + 65;
        }

        arr[i] = String.fromCharCode(char);
    }

    return arr.join('');
}
