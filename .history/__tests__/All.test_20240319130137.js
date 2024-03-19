const allData = require('../All');
test('if array contains 6 elements ', () => {
  expect(allData.length).toBe(6);
});
//second methos do the same thing
test('if array contains 6 elements 2ths methods ', () => {
  expect(allData).toHaveLength(6);
});
//cont length on string
test('if array contains 6 elements 2ths methods ', () => {
  expect('AbdoHosni').toHaveLength(9);
});
//method tocontain
test('if array contains the number of 6 or not ', () => {
  expect(allData).toContain(1);
});
//method tocontain
test('check if array don`t have the nujmber6 ', () => {
  expect(allData).toContain(1);
});
