import calculator from "../code/calculator";
//calculations
test("2 + 2 to be 4", () => {
  expect(calculator.add(3, 6)).toBe(9);
});

test("3 - 6 to be -3", () => {
  expect(calculator.sub(3, 6)).toBe(-3);
});

test("3 * 6 to be 18", () => {
  expect(calculator.mul(3, 6)).toBe(18);
});

test("3 / 6 to be 0.5", () => {
  expect(calculator.div(3, 6)).toBe(0.5);
});

//is a number
test("!is NaN", () => {
  expect(calculator.div(6, "A")).toBe("Not a number");
});

test("!is NaN", () => {
  expect(calculator.add(6, "a")).toBe("Not a number");
});

test("!is NaN", () => {
  expect(calculator.sub(6, "a")).toBe("Not a number");
});
test("!is NaN", () => {
  expect(calculator.mul(6, "a")).toBe("Not a number");
});

//impossible
test("Dividing with 0", () => {
  expect(calculator.div(0, 3)).toBe("Impossible 0");
});
test("Dividing with 0 (Nu. 2)", () => {
  expect(calculator.div(6, 0)).toBe("Impossible 0");
});
