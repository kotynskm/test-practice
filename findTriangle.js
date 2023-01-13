export function findTriangle(side1, side2, side3) {
  // if set size is 1: all sides are the same (equilateral)

  // if set size is 2: two sides are the same (isoceles)

  // if set size is 3: all sides are different (scalene)

  // edge cases
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    return "invalid input";
  }
  if (side1 === undefined || side2 === undefined || side3 === undefined) {
    return "invalid input";
  }
  if (
    typeof side1 !== "number" ||
    typeof side2 !== "number" ||
    typeof side3 !== "number"
  ) {
    return "invalid input";
  }

  const numberSet = new Set([side1, side2, side3]);

  if (numberSet.size === 3) {
    return "scalene";
  } else if (numberSet.size === 2) {
    return "isoceles";
  } else {
    return "equilateral";
  }
}
