const reverseString = function(string) {
    let letters = string.split('');
    let reversedString = '';
    let maxIndex = string.length - 1;

    for (let i = 0; i < string.length; i++) {
        reversedString += letters[maxIndex - i]
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
