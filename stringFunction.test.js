const stringFunction = require('./stringFunction');

test('capitalize first letter of test to TEST', () => {
  expect(stringFunction("test")).toBe("Test");
});