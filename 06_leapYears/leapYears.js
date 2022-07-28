const leapYears = function (year) {
  if (year % 4 == 0 && year % 100 != 0) {
    return true;
  }
  if (year % 400 == 0){
    return true;
  } else {
    return false;
  }
};
leapYears(2400);
console.log(leapYears(2400));
// Do not edit below this line
module.exports = leapYears;
