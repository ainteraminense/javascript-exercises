const pascal = function(n) {
  if (n === 1) {
    return [1];
  } else {
    const previousRow = pascal(n-1);
    const curr = [];
    for (let i = 0; i <= previousRow.length; i++) {
        if(i === 0) {
            curr.push(0 + previousRow[0]);
        } else if (i === previousRow.length) {
            curr.push (previousRow[i - 1] + 0)
        } else {
            curr.push(previousRow[i - 1] + previousRow[i])
        }
    }
    return curr;
  }
};
  
// Do not edit below this line
module.exports = pascal;
