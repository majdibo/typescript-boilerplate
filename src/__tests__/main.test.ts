import {taste} from "../main";

test('🐔 came before 🥚', () => {
  expect("🐔" < "🥚").toBe(true)
  expect("🐔" > "🥚").toBe(false)
});

test("🍕 is delicious", async ()=> {
  expect(await taste("🍕")).toBe("delicious");
});
