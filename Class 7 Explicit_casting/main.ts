let myName :unknown="Sarwar"
console.log((myName as string).length)
console.log((<string>myName).length)
