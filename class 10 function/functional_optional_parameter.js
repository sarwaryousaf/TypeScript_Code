"use strict";
// function optional parameter
function Name(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = console.log(Name("Sarwar", "Yousaf"));
var result2 = console.log(Name("Muhammad"));
let result3 = console.log("Muhammad", "Sarwar", "Muhammadi");
