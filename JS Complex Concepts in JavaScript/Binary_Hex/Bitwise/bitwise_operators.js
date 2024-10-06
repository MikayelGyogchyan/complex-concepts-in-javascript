/*
&	AND	Sets each bit to 1 if both bits are 1
|	OR	Sets each bit to 1 if one of two bits is 1
^	XOR	Sets each bit to 1 if only one of two bits is 1
~	NOT	Inverts all the bits
<<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off


Examples
Operation	Result	Same as	Result
5 & 1	1	0101 & 0001	 0001
5 | 1	5	0101 | 0001	 0101
~ 5	10	 ~0101	 1010
5 << 1	10	0101 << 1	 1010
5 ^ 1	4	0101 ^ 0001	 0100
5 >> 1	2	0101 >> 1	 0010
5 >>> 1	2	0101 >>> 1	 0010
*/


// JavaScript Bitwise XOR
// When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different:

/*
0 ^ 0	0
0 ^ 1	1 
1 ^ 0	1
1 ^ 1	0 
*/

/*
1111 ^ 0000	1111
1111 ^ 0001	1110
1111 ^ 0010	1101
1111 ^ 0100	1011
*/

// 1. Bitwise XOR returns 1 if the bits are different:

/*
5	00000000000000000000000000000101
1	00000000000000000000000000000001
5 ^ 1	00000000000000000000000000000100 (4)
*/
let a = 5 ^ 1; // 4

// 2. JavaScript Bitwise NOT (~)

/*
5	00000000000000000000000000000101
~5	11111111111111111111111111111010 (-6)
*/
let b = ~5; // -6

// 3. JavaScript (Zero Fill) Bitwise Left Shift (<<)
// This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off:

/*
5	00000000000000000000000000000101
5 << 1	00000000000000000000000000001010 (10)
*/
let c = 5 << 1; // 10

// 4. JavaScript (Sign Preserving) Bitwise Right Shift (>>)
// This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off:

/*
-5	11111111111111111111111111111011
-5 >> 1	11111111111111111111111111111101 (-3)
*/
let d = -5 >> 1; // -3

// 5. JavaScript (Zero Fill) Right Shift (>>>)
// This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off:

/*
5	00000000000000000000000000000101
5 >>> 1	00000000000000000000000000000010 (2)
*/

let x = 5 >>> 1; // 2 

