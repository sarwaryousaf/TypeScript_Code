"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book = {
    author: {
        firstName: "muhammad sarwar",
        lastName: "yousaf"
    },
    name: "My favorite book"
};
console.log(book.author.firstName);
console.log(book["author"]["lastName"]);
