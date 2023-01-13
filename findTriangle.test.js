import { it, expect, describe } from "vitest";
import { findTriangle } from "./findTriangle";

// test suite for findTriangle function
describe("findTriangle", () => {
  it("should be invalid input if no values are passed", () => {
    const result = findTriangle();

    expect(result).toBe("invalid input");
  });

  it("should be invalid input if negative values are passed", () => {
    const num1 = -1;
    const num2 = -2;
    const num3 = -3;

    const result = findTriangle(num1, num2, num3);

    expect(result).toBe("invalid input");
  });

  it("should be invalid input if a string is passed", () => {
    const string = "string";

    const result = findTriangle(string);

    expect(result).toBe("invalid input");
  });

  it("should be invalid input if 0 values are passed", () => {
    const num1 = 0;
    const num2 = 0;
    const num3 = 0;

    const result = findTriangle(num1, num2, num3);

    expect(result).toBe("invalid input");
  });
  it("should be invalid input if an array is passed", () => {
    const arr = [1, 2, 3];

    const result = findTriangle(arr);

    expect(result).toBe("invalid input");
  });

  it("should return equilateral if all inputs are the same value", () => {
    const num1 = 1;
    const num2 = 1;
    const num3 = 1;

    const result = findTriangle(num1, num2, num3);

    expect(result).toBe("equilateral");
  });

  it("should return isoceles if two inputs are the same value", () => {
    const num1 = 1;
    const num2 = 1;
    const num3 = 3;

    const result = findTriangle(num1, num2, num3);

    expect(result).toBe("isoceles");
  });

  it("should return scalene if all inputs are different values", () => {
    const num1 = 1;
    const num2 = 2;
    const num3 = 3;

    const result = findTriangle(num1, num2, num3);

    expect(result).toBe("scalene");
  });
});
