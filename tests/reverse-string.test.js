import reverString from "../code/reverse-string";

test(" '' to be '' ", () => {
  expect(reverString("")).toBe("");
});

test(" 'reverse' to be 'esrever' ", () => {
  expect(reverString("reverse")).toBe("esrever");
});

test(" 'reverse and reverse' to be 'esrever dna esrever' ", () => {
  expect(reverString("reverse and reverse")).toBe("esrever dna esrever");
});
