//Function Overloading
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    return a + b;
}

console.log(add(2, 2)); // 4
console.log(add("sarwar", "yousaf")); // "sarwar yousaf"
