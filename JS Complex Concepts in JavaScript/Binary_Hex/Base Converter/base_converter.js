// Converting between binary, decimal, and hexadecimal in JavaScript
'use strict';

var convertBase = function () { 
  function isValid(num, base) {
      const validChars = {
          2: /^[01]+$/,
          10: /^[0-9]+$/,
          16: /^[0-9a-fA-F]+$/
      };
      return validChars[base] && validChars[base].test(num);
  }

  function convertBase(baseFrom, baseTo) {
      return function (num) {
          if (!isValid(num, baseFrom)) {
              throw new Error(`Invalid number '${num}' for base ${baseFrom}`);
          }
          return parseInt(num, baseFrom).toString(baseTo);
      };
  }

  // Predefined conversions
  convertBase.bin2dec = convertBase(2, 10);
  convertBase.bin2hex = convertBase(2, 16);
  convertBase.dec2bin = convertBase(10, 2);
  convertBase.dec2hex = convertBase(10, 16);
  convertBase.hex2bin = convertBase(16, 2);
  convertBase.hex2dec = convertBase(16, 10);

  return convertBase;
}();

console.log(convertBase.bin2dec('111')); // '7'
console.log(convertBase.dec2hex('42')); // '2a'
console.log(convertBase.hex2bin('f8')); // '11111000'
console.log(convertBase.dec2bin('22')); // '10110'

/*
parseInt('111', 2) will interpret '111' as a binary number and return the decimal value 7.
parseInt('42', 10) will return 42 (since it's already in decimal).
parseInt('f8', 16) will interpret 'f8' as hexadecimal and return 248.

.toString(baseTo): This method converts the base 10 number produced by parseInt to the desired output base (baseTo). It accepts a parameter (2, 10, 16, etc.) and returns a string representation of the number in that base.

Example:

(7).toString(2) returns '111' (decimal 7 to binary).
(42).toString(16) returns '2a' (decimal 42 to hexadecimal).
So, the combination of parseInt(num, baseFrom) and .toString(baseTo) allows you to convert between different bases by first interpreting the number in the baseFrom and then converting it to baseTo.
*/

