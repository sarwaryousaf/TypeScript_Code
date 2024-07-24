interface Sphere {diameter:number

}
interface Ball {diameter:number
    }
let sphere:Sphere={diameter:10}
let ball :Ball={diameter:12}
ball=sphere
sphere=ball
interface Tube{
    diameter:number,
    length:number
}
let tube:Tube={
    diameter:14,
    length:12
}
ball=tube
//tube=ball//we cannot add ball in tube b/c in ball length is missing

let stdType:{[a:string]:any,id:number}={
lastName:"yousaf",
    id:3
}
// Now lets do it Case By Case
let myType={name:"sarwar",id:12}
//Case 1
myType={id:14,name:"Yousaf"}

// Case 2
//myType={myName:"sarwar",id:14}//error 