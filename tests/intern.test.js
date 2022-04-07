// const Employee = require(`../lib/Employee`);
const Intern = require(`../lib/Intern`);

describe(`Manager class`, () => {
    describe("Initialization", () => {
        it(`should create an object that is an instance of the Intern class`, () => {
            expect(new Intern("Michael", 1, "email@email.com", "school")).toBeInstanceOf(Intern)
        });
        it(`should create an object with a "name", "id", "email", and "school" property with the arguments provided when called with the "new" keyword`, () => {
            const obj = new Intern("Michael", 1, "email@email.com", "school");

            expect(obj.name).toEqual("Michael");
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual("email@email.com");
            expect(obj.school).toEqual("school");
        });
    });
    describe("getName function", () => {
        it(`returns the "name" of the employee`, () => {
            const obj = new Intern("Michael", 1, "email@email.com", "school");

            expect(obj.getName()).toEqual("Michael");
        });
    });
    describe("getId function", () => {
        it(`returns the "id" of the employee`, () => {
            const obj = new Intern("Michael", 1, "email@email.com", "school");

            expect(obj.getId()).toEqual(1);
        });
    });
    describe("getEmail function", () => {
        it(`returns the "email" of the employee`, () => {
            const obj = new Intern("Michael", 1, "email@email.com", "school");

            expect(obj.getEmail()).toEqual("email@email.com");
        });
    });
    describe("getRole function", () => {
        it(`returns the "role" of the employee`, () => {
            const obj = new Intern("Michael", 1, "email@email.com", "school");

            expect(obj.getRole()).toEqual("Intern");
        });
    });
    describe("getSchool function", () => {
        it(`returns the "school" of the employee`, () => {
            const obj = new Intern("Michael", 1, "email@email.com", "school");

            expect(obj.getSchool()).toEqual("school");
        });
    });
});