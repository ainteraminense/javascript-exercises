const repeatString = function(text, repetition) {
    // if repetition is negative return 'ERROR'
    // use loop to repeat strings
    let result = ''
    if (repetition < 0) {
        return 'ERROR';
    } 
    for (i = 0; i < repetition; i ++) {
        result += text;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
