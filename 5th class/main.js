"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//union type
function collection(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    else {
        return a.toString() + " " + b.toString();
    }
}
console.log(collection('Muhammad', 'Sarwar'));
