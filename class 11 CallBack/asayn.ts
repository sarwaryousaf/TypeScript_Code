import { resolve } from "path";

function weather(data:number){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data:",data);
            
            resolve("success")
        },3000)
    })
}
async function weatherCondition(){
    console.log("weather at 08:00 A.M");
    await weather(32)
    console.log("weather at 09:00 A.M");
    await weather(33)
    console.log("weather at 10:00 A.M");
    await weather(34)
    console.log("weather at 11:00 A.M");
    await weather(35)
    console.log("weather at 12:00 A.M");
    await weather(36)
    console.log("weather at 01:00 P.M");
    await weather(37)
    console.log("retrieve all data successfully",);
    
}
weatherCondition()