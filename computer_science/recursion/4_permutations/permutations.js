const permutations = function(array) {
  if (array.length === 0 || array.length === 1) {
    return [array];
  } else {
    const result = [];
    const curr = array[0];
    const mutations = permutations(array.slice(1));

    for (mutation of mutations) {
        for(let i = 0; i <= mutation.length; i++) {
            const left = mutation.slice(0, i);
            const right = mutation.slice(i);
            result.push([...left, curr, ...right]);
        }
    }
    return result;
  }
};
  
// Do not edit below this line
module.exports = permutations;
