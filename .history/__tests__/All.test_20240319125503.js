const allData = require('../All');
test('if array contains 6 elements ', () => {
  expect(allData.length).toBe(6);
});
test('if array contains 6 elements 2ths methods ', () => {
  expect(allData.length).toHaveLength(6);
});
