const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name , id , email , school){
        super(name, id, email);
        
    }
    getSchool(){

    }
    getRole(){
        return "Intern"
    }
}

module.exports = Intern;