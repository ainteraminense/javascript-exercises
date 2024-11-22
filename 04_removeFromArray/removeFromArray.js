const removeFromArray = function(array, ...args) {
    for (i of args) {
        while(array.indexOf(i) != -1) {
            array.splice(array.indexOf(i), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
