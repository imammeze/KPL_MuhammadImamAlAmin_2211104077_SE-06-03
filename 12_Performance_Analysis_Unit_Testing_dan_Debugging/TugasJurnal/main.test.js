const { CariNilaiPangkat } = require("./main");

test("b = 0 (selalu hasil 1)", () => {
  expect(CariNilaiPangkat(0, 0)).toBe(1);
  expect(CariNilaiPangkat(5, 0)).toBe(1);
});

test("b < 0 (hasil -1)", () => {
  expect(CariNilaiPangkat(2, -3)).toBe(-1);
});

test("b > 10 atau a > 100 (hasil -2)", () => {
  expect(CariNilaiPangkat(2, 11)).toBe(-2);
  expect(CariNilaiPangkat(101, 2)).toBe(-2);
});

test("hasil melebihi batas maksimal (hasil -3)", () => {
  expect(CariNilaiPangkat(2, 55)).toBe(-3);
});

test("hitung pangkat normal (dalam batas)", () => {
  expect(CariNilaiPangkat(2, 3)).toBe(8);
  expect(CariNilaiPangkat(5, 2)).toBe(25);
});
