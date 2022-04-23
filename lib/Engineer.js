const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name , id , email , github){
        super(name, id, email);
        
    }
    getSchool(){
        
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;