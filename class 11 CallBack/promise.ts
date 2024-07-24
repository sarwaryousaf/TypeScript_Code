function retriveData(data:number){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data)
            resolve("successfully")
        },2000)
    })
}
console.log("fetching data1")
retriveData(1)
.then(()=>{
    console.log("fetching data2")
    return retriveData(5)
    .then(()=>{
        console.log("fetching data3")
        return retriveData(12)
        .then(()=>{
            console.log("fetching data4")
            return retriveData(14)
            .then((res)=>{
                console.log(res)
            })
        })
    })
})