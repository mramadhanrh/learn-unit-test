import mathFunc from "../mathFunc";

const { sum, normalizeValue } = mathFunc;

describe("mathFunc", () => {
  describe("sum", () => {
    it("sum all given value in parameter", () => {
      expect(sum(1)).toBe(1);
      expect(sum(1, 2, 3, 4)).toBe(10);
      expect(sum(1, 2, 3, 4, 0.5)).toBeCloseTo(10.5);
      expect(sum("1", 2, "3", 4)).toBe("1234");
      expect(sum("1", "2", "3", "4")).toBe("1234");
      expect(sum(NaN)).toBeNaN();
      expect(sum(null)).toBeNull();
      expect(sum(undefined)).toBeUndefined();
    });
  });

  describe("normalize", () => {
    it("normalize the value", () => {
      const min = 0;
      const max = 100;

      expect(normalizeValue(200, min, max)).toBe(max);
      expect(normalizeValue(-1, min, max)).toBe(min);
      expect(normalizeValue(50, min, max)).toBe(50);
      expect(normalizeValue(50.5, min, max)).toBeCloseTo(50.5);
    });
  });
});
