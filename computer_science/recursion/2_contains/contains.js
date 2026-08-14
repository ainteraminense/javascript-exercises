const contains = function(object, value) {
    const values = Object.values(object);
    const nestedObject = values.filter( (obj) => typeof obj === "object" && obj !== null);
    return values.includes(value) ? true : nestedObject.some((nestedValue) => contains(nestedValue, value));
}
  
// Do not edit below this line
module.exports = contains;
