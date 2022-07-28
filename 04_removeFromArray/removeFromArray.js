array = [1, 2 ,3 ,4 ,5 ,6 ,7];
const removeFromArray = function (...args) {
    // makes array the first argument, at position 0
    const array = args[0];
    // create empty array, so it can be filled up
    const newArray = [];
    // loop goes through each item of the array
    array.forEach((item) => {
    // if an item is an argument, exclude it
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    return newArray;
  };
removeFromArray(array, 3, 6)
console.log(removeFromArray(array, 3, 6))
// Do not edit below this line
module.exports = removeFromArray;
