enum Role {
    User="User",
    Admin="Admin"
}

type loginDetails={
    name?:string,
    userName:string,
    password:number,
    role:Role
}
const user1:loginDetails={
    userName:"sarwar",
    password:1234,
    role:Role.Admin
}
const user2:loginDetails={
    userName:"Yousaf",
    password:151214,
    role:Role.User
}
