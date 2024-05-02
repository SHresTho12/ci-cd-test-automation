const calculator = require("../Scripts/basic");

function pow(a, b) {
  console.log("pow called with " + a + " and " + b);
  result = a ** b;
  console.log("result is " + result);
  return a ** b;
}

function modulo(a, b) {
  return a % b;
}

function calculateSomething(n, m) {
  addition = calculator.add(n, m);
  subtraction = calculator.subtract(n, m);
  multiplication = calculator.multiply(n, m);
  division = calculator.divide(n, m);
  power = pow(n, m);
  return addition + subtraction + multiplication + division + power;
}

module.exports = {
  pow,
  modulo,
  calculateSomething,
};
