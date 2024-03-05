const volume = require('./volume');

test('volume of 1, 2, 3 equal to 6', () => {
  expect(volume(1, 2, 3)).toBe(6);
});
// test('volume of 2, 2, 3 equal to 12', () => {
//     expect(volume(2, 2, 3)).toBe(12);
// });
