function sum(a:number,b=10)
{
    return a+b
}
let results=console.log(sum(3,5))
let results1=console.log(sum(66))
// let results2=console.log(sum(3,5,5)) not allowed

// anonoymous function
let Sum:(a:number,b?:number)=>number=function(a:number,b=14):number{
return a+b
}
let results4=console.log(Sum(32,8))
let results5=console.log(Sum(6))