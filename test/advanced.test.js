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
