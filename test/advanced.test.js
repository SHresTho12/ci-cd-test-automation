const calculator = require("../Scripts/advanced");
describe("Pow", () => {
  var BVAdata = [
    // Boundary Value Analysis (BVA) test values
    [0, 1, 0], // Minimum value of a
    [1, 2, 1], // Just above minimum value of a
    [4, 5, 1024], // Just below maximum value of a
    [5, 6, 15625], // Maximum value of a
  ];

  describe.each(BVAdata)("BVA: pow(%i, %i), Expected: %i", (a, b, expected) => {
    test(`returns ${calculator.pow(a, b)}`, () => {
      expect(calculator.pow(a, b)).toBe(expected);
    });
  });

  var DTdata = [
    [0, 89, 0],
    [-1, -3, -1],
    // [65, -12, 0],
    // [-78, 24, Infinity],
  ];

  describe.each(DTdata)("DT: pow(%i, %i), Expected: %i", (a, b, expected) => {
    test(`returns ${calculator.pow(a, b)}`, () => {
      expect(calculator.pow(a, b)).toBe(expected);
    });
  });
});

// Test suite for 'calculateSomething' function
describe("Calculate Something", () => {
  // Define test data
  const testData = [
    [5, 3, 151.66666666666666], // (5+3) + (5-3) + (5*3) + (5/3) + (5^3) = 8 + 2 + 15 + 1.666... + 125 = 151.666...
    [10, 2, 145], // (10+2) + (10-2) + (10*2) + (10/2) + (10^2) = 12 + 8 + 20 + 5 + 100 = 145
    [8, 4, 4146], // (8+4) + (8-4) + (8*4) + (8/4) + (8^4) = 12 + 4 + 32 + 2 + 4096 = 4146
  ];

  // Iterate over test data
  describe.each(testData)("calculateSomething(%i, %i)", (n, m, expected) => {
    // Test each scenario
    test(`should return ${expected}`, () => {
      expect(calculator.calculateSomething(n, m)).toBe(expected);
    });
  });
});

describe("Modulo", () => {
  var BVAdata = [
    [0, 1, 0], // Minimum value of a
    [1, 2, 1], // Just above minimum value of a
    [4, 5, 4], // Just below maximum value of a
    [5, 6, 5], // Maximum value of a
  ];

  describe.each(BVAdata)(
    "BVA: modulo(%i, %i), Expected: %i",
    (a, b, expected) => {
      test(`returns ${calculator.modulo(a, b)}`, () => {
        expect(calculator.modulo(a, b)).toBe(expected);
      });
    }
  );

  var DTdata = [
    [0, 89, 0], // a = 0, b > 0
    [-17, -35, -17], // a < 0, b < 0
    [65, -12, 5], // a > 0, b < 0
    [-78, 24, -6], // a < 0, b > 0
  ];

  describe.each(DTdata)(
    "DT: modulo(%i, %i), Expected: %i",
    (a, b, expected) => {
      test(`returns ${calculator.modulo(a, b)}`, () => {
        expect(calculator.modulo(a, b)).toBe(expected);
      });
    }
  );
});
