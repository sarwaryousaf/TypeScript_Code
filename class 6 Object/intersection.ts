interface Teacher{
    Tname:string,
    Tid:number,
    grade:number,
    age:number
}
interface student{
    name:string,
    id:number,
    education:string,
}
let coaching:Teacher & student={
    name:"sarwar",
    Tid:34,
    grade:17,
    age:35,
    education:"intermediate",
    id:22,
    Tname:"Salman"
}
console.log(coaching)