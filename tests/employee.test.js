const Employee = require(`../lib/Employee`);

describe(`Employee class`, () => {
    describe("Initialization", () => {
        it(`should create an object with a "name", "id", and "email" property with the arguments provided when called with the "new" keyword`, () => {
            const obj = new Employee("Michael", 1, "email@email.com");

            expect(obj.name).toEqual("Michael");
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual("email@email.com");
        });
    });
    describe("getName function", () => {
        it(`returns the "name" of the employee`, () => {
            const obj = new Employee("Michael", 1, "email@email.com");

            expect(obj.getName()).toEqual("Michael");
        });
    });
    describe("getId function", () => {
        it(`returns the "id" of the employee`, () => {
            const obj = new Employee("Michael", 1, "email@email.com");

            expect(obj.getId()).toEqual(1);
        });
    });
    describe("getEmail function", () => {
        it(`returns the "email" of the employee`, () => {
            const obj = new Employee("Michael", 1, "email@email.com");

            expect(obj.getEmail()).toEqual("email@email.com");
        });
    });
    describe("getRole function", () => {
        it(`returns the "role" of the employee`, () => {
            const obj = new Employee("Michael", 1, "email@email.com");

            expect(obj.getRole()).toEqual("Employee");
        });
    });
});