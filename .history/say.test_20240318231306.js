const say = require('./say');
test('Say jest Message', () => {
  expect(say()).toBe('hello jest');
});
