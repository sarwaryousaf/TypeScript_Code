//Named function
function add(a:number,b:number)
{
    return a+b;
}
console.log("The sum of Two numbers is :",add(3,5))

// anonymous function
let prod= function(a:number,b:number){
    return a*b
}
console.log("The product of two number is :",prod(3,6))

// anonymous function with explicit type
let addition :(a:number,b:number)=>number=function(a:number,b:number):number{
    return a*b
}
let result =addition(4,9)

//Lambda function
let sub=(i:number,j:number)=> i-j