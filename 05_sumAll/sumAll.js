const sumAll = function(num1 , num2) {
    let sum = 0;
    if (
      !Number.isInteger(num1) ||
      !Number.isInteger(num2) ||
      num1 < 0 ||
      num2 < 0
      ) {
        return "ERROR";
    }
    const MIN_VALUE = Math.min(num1, num2);
    const MAX_VALUE = Math.max(num1, num2);
    for (let i = MIN_VALUE; i <= MAX_VALUE; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
