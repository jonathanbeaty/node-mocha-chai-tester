// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function () {

    // test the normal case
    it('should determine if remainder equals zero based on divisors of 15, 5, and 3, else returns number', function () {
        // range of normal inputs, including
        // notable cases like negative answers
        const normalCases = [{
                num: 30,
                expected: 'fizz-buzz'
            },
            {
                num: 20,
                expected: 'buzz'
            },
            {
                num: 9,
                expected: 'fizz'
            }
        ];
        normalCases.forEach(function (input) {
            const answer = fizzBuzzer(num);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should raise error if args not numbers', function () {
        // range of bad inputs where not both are numbers
        const badInputs = [
            ['a'],
            ['1'],
            [false]
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function (input) {
            expect(function () {
                fizzBuzzer(input[0]);
            }).to.throw(Error);
        });
    });
});