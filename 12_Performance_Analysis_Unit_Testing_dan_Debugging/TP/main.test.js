const { CariTandaBilangan } = require("./main");

test("Bilangan negatif", () => {
  expect(CariTandaBilangan(-10)).toBe("Negatif");
});

test("Bilangan positif", () => {
  expect(CariTandaBilangan(5)).toBe("Positif");
});

test("Bilangan nol", () => {
  expect(CariTandaBilangan(0)).toBe("Nol");
});
