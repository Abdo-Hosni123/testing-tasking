const thesum = require('../sum');
// test(name , fn , timeout)
// it (name , fn , timeout)
// descripe (name , fn)

describe('check the numbers sum total ', () => {
  test('return the 0 if it not enter number  ', () => {
    expect(thesum()).toBe(0);
  });
  test('return the number  ', () => {
    expect(thesum(10)).toBe(10);
  });

  test('return the number1 + number2 ', () => {
    expect(thesum(10, 15)).toBe(25);
  });
  test('return the number1 + number2 + number3 ', () => {
    expect(thesum(10, 20, 40)).toBe(70);
  });
});
