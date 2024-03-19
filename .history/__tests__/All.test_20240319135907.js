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
  expect(allData).not.toContain(9);
});
test('check if array don`t have the nujmber6 ', () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[i]).not.toBe(9);
  }
});

test('check if array don`t have the nujmber6 1sth method  ', () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBe(false);
  }
});

test('check if array don`t have numbers  ', () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBeFalsy();
  }
});
test('check if first element of array is greater than 1  ', () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[1]).toBeGreaterThanOrEqual(1);
  }
});
test('check if first element of array is greater or equal than 1   ', () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[1]).toBeGreaterThanOrEqual(1);
  }
});
test('check if first element of array is less than 1   ', () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[1]).toBeLessThan(4);
  }
});
test('check if array don`t have the nujmber6 2sth method  ', () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[2]).toBeGreaterThan(1);
  }
});
// toBefalsy is opposite toBeTruthy

test('check for undefined', () => {
  let a;
  expect(a).toBeUndefined();
});
test('match for word ', () => {
  let string = 'I love my mother and father ';
  expect(string).toMatch(/mother/);
});

test('check for propery age', () => {
  let myobject1 = {
    name: 'Abdo_Hosni',
    age: 23,
  };
  expect(myobject1).toHaveProperty('age');
});

test('check for propery age is 23', () => {
  let myobject2 = {
    name: 'Abdo_Hosni',
    age: 23,
  };
  expect(myobject2).toHaveProperty('age', 23);
});

// create my own functionality
expect.extend({
  toBeLargerThan(recived, target) {
    const pass = recived > target;
    if (pass) {
      return {
        message: () => `Expected ${recived} to Be larger than ${target}`,
        pass: true,
      };
    } else {
      return {
        message: () => `Expected ${recived} to Be larger than ${target}`,
        pass: false,
      };
    }
  },
});
test('check if number 10 is greater than number 3  ', () => {
  expect(10).toBeLargerThan(3);
});
