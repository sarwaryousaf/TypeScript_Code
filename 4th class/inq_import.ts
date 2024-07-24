import inquirer from "inquirer";
let myPersonal_info = await inquirer.prompt(
    [
        {
        name:"name",
        type:"string",
        message:"Enter your Name"
}

])
console.log(myPersonal_info)