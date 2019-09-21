const calculator = require('./calculator.js');
const { add } = calculator;


it('runs the tests', () => {
  // assertions
  expect(true).toBe(true);
});
// test runner => the library that runs the tests
// assertion library => the library that handles the tests cases (handles the details)

//what should the add function do?

//test suite (collection of related tests)
describe('the calculator', () => {


describe('the add method', () => {

  it('should add two numbers', () => {
    
    expect(add(2,2)).toBe(4);
    expect(add(2,1)).toBe(3);
    expect(add(-2, 4)).toBe(2);
    });
    
    // add function should return 0 on no arguments
    it('should return 0 on no arguments', () => {
      expect(add()).toBe(0);

    });
  });
})

// take two values and combine them
// return one value
// add(2,2) => 4

// what should happen on no arguments?
// what about one argument?
// what about many?
//what if they pass in strings?