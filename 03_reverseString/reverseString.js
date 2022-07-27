const reverseString = function (string) {
  return string.split("").reverse().join("");
};
reverseString("hello");
console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
