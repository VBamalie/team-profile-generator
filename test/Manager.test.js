//require manager and employee from lib
const Manager = require("../lib/Manager")
const Employee = require("../lib/Employee")
//can set office number
describe("set office number via constructor argument" , ()=>{
    const testValue = 100;
    const e = new Manager("John" , 1, "john@email.com", officeNumber);
    expect(e.officeNumber).toBe(testValue);
})
//can get office number
//role returns manager