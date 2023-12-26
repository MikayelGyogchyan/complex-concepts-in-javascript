// 14
console.log(Math.floor(9.7) === 9)
console.log(~~9.7 === 9)

// 17
if ([1, 2, 3].indexOf(3) > -1) {}
if (~[1, 2, 3].indexOf(3)) {} // found
if (!~[1, 2, 3].indexOf(3)) {} // not found
// if ([1, 2, 3].includes(3)) {} // true
