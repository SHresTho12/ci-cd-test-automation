function pow(a, b) {
  console.log("pow called with " + a + " and " + b);
  result = a ** b;
  console.log("result is " + result);
  return a ** b;
}

function modulo(a, b) {
  return a % b;
}
module.exports = {
  pow,
  modulo,
};
