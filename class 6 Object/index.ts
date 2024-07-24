//anonymous
let personal:{name:string,age:number}={
    name:"Sarwar Yousaf",
    age:24
}

// typed Allias
type personal=
{
    name:string,
    age:number,
    id:boolean
}
let student:personal={
    name:"Muhammad Sarwar",
    age:24,
    id:true
}

//Interfaces
interface teacher{
    name:string,
    age?:number
}
let school:teacher={
name:"Master Ali"
}

console.log(school.name)
