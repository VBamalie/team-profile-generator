//require the employee from the lib folder
const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee")
//test can begin employee instance
describe("Employee" , ()=>{
    it("Begin the instance of employee", ()=>{
        const e = new Employee();
        expect(new Employee(e)).toBe("object");
    });
 //test can set name via constructor args
    it("can set a name with the constructor arguments", () =>{
        const name = "John";
        const e = new Employee(name);

        expect(e.name).toBe(name)
    })
//can set id via constructor args
    it("can set an id with the constructor arguments", () =>{
        const id = 1;
        const e = new Employee(id);

        expect(e.id).toBe(id)
    })
//can set email via constructor args
    it("can set an email with the constructor arguments" , () =>{
        const email = 1;
        const e = new Employee(email);

        expect(e.email).toBe(email)
    })
})
//can get name via constructor function
//put names into the html
describe("getName" , ()=>{
    it("should get the name with a function" , () =>{

    })
})
//can get id via constructor function
//can get email via constructor function
//role function should return employee
describe("getRole" , ()=>{
    it("should return employee" , () => {
        const e = function getRole(){ return "employee";}
        
        expect(e).toBe("Employee")
    })
})