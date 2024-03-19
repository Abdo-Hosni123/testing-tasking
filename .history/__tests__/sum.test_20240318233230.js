const thesum = require('../sum');
// test(name , fn , timeout)
// it (name , fn , timeout)
test('return the number  ', () => {
  expect(thesum(10)).toBe(10);
});

test('return the number1 + number2   ', () => {
  expect(thesum(10, 15)).toBe(25);
});
