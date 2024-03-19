const thefilter = require('../input');
describe('validate the inputs', () => {
  test('check if name is empty ', () => {
    expect(thefilter()).toBe('unknown');
  });
});
