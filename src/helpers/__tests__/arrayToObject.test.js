import arrayToObject from "../arrayToObject";

describe("arrayToObject", () => {
  it("could convert 1 dimensional array", () => {
    expect(arrayToObject(["a", "b", "c"])).toEqual({ a: "a", b: "b", c: "c" });
  });

  it("not having 0 as initial object key", () => {
    expect(arrayToObject(["a", "b", "c"])).not.toEqual({
      0: "a",
      b: "b",
      c: "c"
    });
  });
});
