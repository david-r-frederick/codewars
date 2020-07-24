// Does my number look big in this?

//A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits):
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):
// 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

// The Challenge:
// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

narcissistic = v => v.toString().split('').map(e => +e).map(e => Math.pow(e, v.toString().length)).reduce((x, y) => x + y, 0) === v;