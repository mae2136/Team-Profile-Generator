const { it } = require("jest-circus");
// const Employee = require(`../lib/Employee`);
const Manager = require(`../lib/Manager`);

describe(`Manager class`, () => {
    describe("Initialization", () => {
        it(`should create an object that is an instance of the Manager class`, () => {
            expect(new Manager("Michael", 1, "email@email.com", 12)).toBeInstanceOf(Manager)
        });
        it(`should create an object with a "name", "id", "email", and "officeNumber" property with the arguments provided when called with the "new" keyword`, () => {
            const obj = new Manager("Michael", 1, "email@email.com", 12);

            expect(obj.name).toEqual("Michael");
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual("email@email.com");
            expect(obj.officeNumber).toEqual(12);
        });
    });
    describe("getName function", () => {
        it(`returns the "name" of the employee`, () => {
            const obj = new Manager("Michael", 1, "email@email.com", 12);

            expect(obj.getName()).toEqual("Michael");
        });
    });
    describe("getId function", () => {
        it(`returns the "id" of the employee`, () => {
            const obj = new Manager("Michael", 1, "email@email.com", 12);

            expect(obj.getId()).toEqual(1);
        });
    });
    describe("getEmail function", () => {
        it(`returns the "email" of the employee`, () => {
            const obj = new Manager("Michael", 1, "email@email.com", 12);

            expect(obj.getEmail()).toEqual("email@email.com");
        });
    });
    describe("getRole function", () => {
        it(`returns the "role" of the employee`, () => {
            const obj = new Manager("Michael", 1, "email@email.com", 12);

            expect(obj.getRole()).toEqual("Manager");
        });
    });
});