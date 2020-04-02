import getMultiplier from "../getMultiplier";

describe("multiplier function", () => {
  it("could multiply value by number", () => {
    expect(getMultiplier(10, 5)).toBe(50);
  });

  it("could multiply value by string", () => {
    expect(getMultiplier("10", "5")).toBe(50);
  });

  it("return value of type number", () => {
    expect(typeof getMultiplier("10", "5")).toBe("number");
  });
});
