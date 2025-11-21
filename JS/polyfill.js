// A polyfill is a piece of code (most often JavaScript) that provides
// functionality for modern web standards (like new HTML, CSS, or JavaScript features)
// in older browsers that do not natively support them.

// ES5 (2009)	.forEach()
// ES5 (2009)	.map()
// ES5 (2009)	.filter()
// ES5 (2009)	.reduce()

// ES6 (2015)	.find()
// ES6 (2015)	.fill()
// ES6 (2015)	Array.from() //Not a prototype method, but a static Array method

// ES7 (2016)	.includes()

// ES10 (2019)	.flat()


if (!Array.prototype.includes) {

    Array.prototype.includes = function (searchElement, fromIndex) {
        'use strict';

        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }

        var O = Object(this);

        var len = O.length >>> 0;

        if (len === 0) {
            return false;
        }

        var n = fromIndex | 0;

        var k;
        if (n >= 0) {
            k = n;
        } else {
            k = len + n;
            if (k < 0) {
                k = 0;
            }
        }

        while (k < len) {
            var elementK = O[k];
            if (searchElement === elementK || (searchElement !== searchElement && elementK !== elementK)) {
                return true;
            }
            k++;
        }

        return false;
    };
}

var array = [1, 2, NaN, 'hello', 0, -0];

console.log('Does array include 3?', array.includes(3));        // false
console.log('Does array include 2?', array.includes(2));        // true
console.log('Does array include NaN?', array.includes(NaN));    // true (Special SameValueZero comparison)
console.log('Does array include 1 starting from index 1?', array.includes(1, 1)); // false
console.log('Does array include 2 starting from index 1?', array.includes(2, 1)); // true
console.log('Does array include 2 starting from index -3?', array.includes(2, -3));