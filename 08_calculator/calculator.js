const add = function(...args) {
  let sum = 0;
  args.forEach(num => sum+=num);
  return sum;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numArray) {
	let sum = 0;
  numArray.forEach(num => sum+=num);
  return sum;
};

const multiply = function(numArray) {
  let product = 1;
  numArray.forEach(num => product*=num);
  return product;
};

const power = function(base, pow) {
  return Math.pow(base, pow);
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
  else {
    let fact = 1;
    for(i = 1; i <= num; i++) {
      fact*=i;
    }
  return fact;
  }
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
