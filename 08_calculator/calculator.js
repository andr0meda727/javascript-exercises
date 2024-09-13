const add = function(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
};

const subtract = function(...nums) {
	return nums.reduce((sum, num) => sum - num);
};

const sum = function(array) {
  return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function(array) {
  return array.reduce((sum, num) => sum * num);
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(factorial) {
  let sum = 1;
  for (let i = 1; i <= factorial; i++) {
    sum *= i;
  }
  
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
