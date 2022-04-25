
//like the game one in the mini project
class Employee{

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return{
            name: "name",
            type: "input",
            message: "What is their name?"
        }
    }
    getId(){
        return{
            name: "id",
            type: "input",
            message: "What is their employee ID?"
        }
    }
    getEmail(){
        return{
            name: "email",
            type: "input",
            message: "What is their email address?"
        }
    }
    getRole(){
    

    }
}

module.exports = Employee