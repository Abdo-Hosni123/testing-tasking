const thefilter = require('../input');
describe('validate the input field', () => {
  test('check if name is empty ', () => {
    expect(thefilter()).toBe('unknown');
  });
});
