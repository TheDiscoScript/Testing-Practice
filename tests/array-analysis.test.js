import analyze from "../code/array-analysis";

const array = [1, 8, 3, 4, 2, 6];
const expectedObject = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};
const emptyArray = [];

test("expect object", () => {
  expect(analyze(array)).toBeInstanceOf(Object);
});

test("object containing average, min, max, lenght", () => {
  expect(analyze(array)).toEqual({
    average: expect.any(Number),
    min: expect.any(Number),
    max: expect.any(Number),
    length: expect.any(Number),
  });
});

// test("empty array", () => {
//   expect(analyze(emptyArray)).toBe("Empty array");
// });

test("array to be expected object", () => {
  expect(analyze(array)).toEqual(expectedObject);
});
