const calculator = require("../Scripts/advanced");

describe("Pow", () => {
  var BVAdata = [
    [1, 2, 3],
    [4, 5, 9],
    [3, 12, 15],
    [4, 6, 10],
  ];

  describe.each(BVAdata)("BVA: pow(%i, %i), Expected: %i", (a, b, expected) => {
    test(`returns ${calculator.pow(a, b)}`, () => {
      expect(calculator.pow(a, b)).toBe(expected);
    });
  });

  var DTdata = [
    [0, 89, 89],
    [-17, -35, -52],
    [65, -12, 53],
    [-78, 24, -54],
  ];

  describe.each(DTdata)("DT: pow(%i, %i), Expected: %i", (a, b, expected) => {
    test(`returns ${calculator.pow(a, b)}`, () => {
      expect(calculator.pow(a, b)).toBe(expected);
    });
  });
});

describe("Modulo", () => {
  var BVAdata = [
    [1, 2, 3],
    [4, 5, 9],
    [3, 12, 15],
    [4, 6, 10],
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
    [0, 89, 89],
    [-17, -35, -52],
    [65, -12, 53],
    [-78, 24, -54],
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
