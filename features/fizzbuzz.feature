Feature: Display number from 1 to 100, replacing:
    - 3 multiples by 'FIZZ'
    - 5 multiples by 'BUZZ'
    - 3 & 5 multiples by 'FIZZBUZZ'

Scenario: Display 0 value
Given enter a number 0
When fizzbuzz
Then should have 'FIZZBUZZ'

Scenario Outline: Display Numbers
Given enter a number <input>
When fizzbuzz
Then should have '<output>'

Examples:
    | input | output |
    |   1   |    1   |
    |   2   |    2   |
    |   3   |  FIZZ  |
    |   6   |  FIZZ  |
    |   7   |    7   |
    |   5   |  BUZZ  |
    |   10  |  BUZZ  |
    |   15  |FIZZBUZZ|
    |   30  |FIZZBUZZ|
