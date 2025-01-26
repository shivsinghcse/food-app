import {Sumtest} from "../Sumtest";
test("Testing sum-1", () => {
  expect(Sumtest(2, 1)).toBe(3);
});
test("Testing sum-2", () => {
  expect(Sumtest(2, 7)).toBe(9);
});
test("Testing sum-3", () => {
  expect(Sumtest(2, 4)).toBe(6);
});
