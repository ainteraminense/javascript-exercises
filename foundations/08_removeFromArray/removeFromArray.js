const removeFromArray = function(arr, ...values) {
    // for (let value of values) {
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i] === value) {
    //             arr.splice(i, 1);
    //             i--;
    //         }
    //     }
    // }
    // return arr;
    newArr = [];
    newArr = arr.filter((arrValue) => !values.includes(arrValue));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
