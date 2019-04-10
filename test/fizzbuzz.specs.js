const fizzbuzz = require('../fizzbuzz.js');
const expect = require('chai').expect;

describe("Test of the test framework", () => {
    it("Should pass", () => expect(1).equal(1));
});
describe("Fizzbuzz sould return number", () => {
    it("init test", () => expect(fizzbuzz(1)).equal(1));
    it(" 15 => FIZZBUZZ", () => expect(fizzbuzz(15)).equal("FIZZBUZZ"));
    it(" 5 => BUZZ", () => expect(fizzbuzz(5)).equal("BUZZ"));
    it(" 3 => FIZZ", () => expect(fizzbuzz(3)).equal("FIZZ"));
    it(" 12 => FIZZ", () => expect(fizzbuzz(12)).equal("FIZZ"));
    it(" 10 => BUZZ", () => expect(fizzbuzz(10)).equal("BUZZ"));
});