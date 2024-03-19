const thefilter = require('../input');

test('check if name is empty ', () => {
  expect(thefilter()).toBe('unknown');
});
