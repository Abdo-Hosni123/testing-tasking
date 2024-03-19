const thefilter = require('../input');
describe('validate the inputs', () => {
  test('check if name is empty ', () => {
    expect(thefilter()).toBe('unknown');
  });
  test('check for space start + End  ', () => {
    expect(thefilter('    Abdo')).toBe('Abdo');
  });
  test('check for space start + End  ', () => {
    expect(thefilter('    Abdo      ')).toBe('Abdo');
  });
  test('check for space start + End  ', () => {
    expect(thefilter('Abdo_Mohammed_Hosni ')).toBe('Abdo');
  });
});
