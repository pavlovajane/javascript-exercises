const add = function(a,b) {
  return Number(a+b)
};

const subtract = function(a,b) {
  return Number(a-b);
};

const sum = function(array) {
  
  let sum = 0;

  for (let i = 0; i < array.length; i++ ) {
    sum += array[i];
  }

  return sum;
};

const multiply = function(array) {
  
  let mult;
  if (array.length == 1) {
    mult = array[0];
  }
  else if (array.length == 0) {
    return "ERROR"
  }
  else {
    mult = 1;
  };

  for (let i = 0; i < array.length; i++ ) {
    mult *= array[i];
  }

  return mult;
};

const power = function(a,b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  if (a == 0){
    return 1;
  }
  else {
    return (a*factorial(a-1));
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
