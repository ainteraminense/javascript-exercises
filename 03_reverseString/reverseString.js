const reverseString = function(originalString) {
    let reversedString = "";
    let stringArray = originalString.split("");
    for (let i = 0; i < stringArray.length; i++) {
        reversedString += stringArray[stringArray.length - (i + 1)];
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
