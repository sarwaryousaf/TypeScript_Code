// function optional parameter
 function Name(firstName:string,lastName?:string):string{
if(lastName)
    return firstName+" "+ lastName;
else 
return firstName;
 }
 let result1=console.log(Name("Sarwar","Yousaf"))
 var result2=console.log(Name("Muhammad"));
 //let result3=console.log(Name("Muhammad","Sarwar","Muhammadi"))//not allowed b/c too much parameter
 
//  anonoymous function optional parameter
let Name1:(firstName:string,lastName?:string)=>string=
function(firstName:string,lastName?:string){
    if(lastName)
        return firstName +" "+ lastName
    else
    return firstName
}
let result4=console.log(Name1("Sarwar","Yousaf"))
var result5=console.log(Name1("Muhammad"));