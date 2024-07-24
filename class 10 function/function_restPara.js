"use strict";
function RestNum(a, ...b) {
    return a + b.reduce((total, num) => total + num);
}
let store = console.log(RestNum(2, 4, 5, 6, 7, 4, 7, 8, 55, 4));
//for string 
function RestName(a, ...b) {
    return a + ' ' + b.join(" ");
}
let store1 = console.log(RestName('sarwar', 'yousaf', 'muhammad', 'ahmad', 'muneer'));
