const theSum = (...numbers) => {
  return numbers.reduce((pv, cv) => pv + cv);
};
module.exports = theSum;
