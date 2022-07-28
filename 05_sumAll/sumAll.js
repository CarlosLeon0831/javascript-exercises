let firstNumber = 1;
let lastNumber = 4;

const sumAll = function (firstNumber, lastNumber) {
  let sum = 0;
  for (let i = 0; i < lastNumber + 1; i++) {
    sum += i;
  }
  return sum
};
console.log(sumAll(firstNumber, lastNumber));
// Do not edit below this line
module.exports = sumAll;
