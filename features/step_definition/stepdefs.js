const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const fizzbuzz = require('../../fizzbuzz.js');

let number;
let output;


Given('enter a number {int}', (int) => number = int);
When('fizzbuzz', () => output = fizzbuzz(number));
Then('should have {string}', (string) => assert.equal(output, string))