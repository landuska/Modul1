const calculateBonus = require("./debug");

describe("Test suite positiv", () => {
  test("Sum of numbers < = 50", () => {
    expect(calculateBonus(23, 4)).toBe(27);
  });

  test("Sum of numbers > 50", () => {
    expect(calculateBonus(64, 4)).toBe(50);
  });

  test("Sum of numbers = 50", () => {
    expect(calculateBonus(25, 25)).toBe(50);
  });

  test("Sum of one positiv and one negativ numbers", () => {
    expect(calculateBonus(-23, 4)).toBe(-19);
  });

  test("Sum of one positiv and one negativ numbers", () => {
    expect(calculateBonus(23, -4)).toBe(19);
  });

  test("Sum of one null", () => {
    expect(calculateBonus(0, 4)).toBe(4);
  });

  test("Sum of one null", () => {
    expect(calculateBonus(1, 0)).toBe(1);
  });

  test("Sum of two null", () => {
    expect(calculateBonus(0, 0)).toBe(0);
  });
});

describe("Test suite negativ", () => {
  test("Sum of numbers < 50", () => {
    expect(calculateBonus(23, 4)).toBe(40);
  });
  test("Sum of numbers > 50", () => {
    expect(calculateBonus(100, 4)).toBe(40);
  });
});
