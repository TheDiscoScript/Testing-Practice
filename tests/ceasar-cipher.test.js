import ceaserCipher from "../code/ceasar-cipher";

test("Key is 0", () => {
  expect(ceaserCipher("abc", 0)).toBe("abc");
});

test("Key is NaN", () => {
  expect(ceaserCipher("abc", "a")).toBe("Key is NaN");
});

test("abc to be def", () => {
  expect(ceaserCipher("abc", 3)).toBe("def");
});

test("def to be abc", () => {
  expect(ceaserCipher("def", -3)).toBe("abc");
});
