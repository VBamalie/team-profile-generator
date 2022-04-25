const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name , id , email , github){
        super(name, id, email);
        
    }
    getGitHub(){
        return{
            name: "github",
            message: "What's their github account?",
            type: "input"
        }
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;