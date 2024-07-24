"use strict";
//Named function
function add(a, b) {
    return a + b;
}
console.log("The sum of Two numbers is :", add(3, 5));
// anonymous function
let prod = function (a, b) {
    return a * b;
};
console.log("The product of two number is :", prod(3, 6));
// anonymous function with explicit type
let addition = function (a, b) {
    return a * b;
};
let result = addition(4, 9);
//Lambda function
let sub = (i, j) => i - j;
