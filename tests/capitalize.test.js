import capitalize from "../code/capitalize";

test("'capitalizator' to be 'Capitalizator'", () => {
  expect(capitalize("Capitalizator")).toBe("Capitalizator");
});

test(" '' to be '' ", () => {
  expect(capitalize("")).toBe("");
});

test(" 'CAPITALIZATOR' to be 'Capitalizator' ", () => {
  expect(capitalize("CAPITALIZATOR")).toBe("Capitalizator");
});
