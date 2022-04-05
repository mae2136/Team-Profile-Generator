const { it } = require("jest-circus");
// const Employee = require(`../lib/Employee`);
const Engineer = require(`../lib/Engineer`);

describe(`Manager class`, () => {
    describe("Initialization", () => {
        it(`should create an object that is an instance of the Engineer class`, () => {
            expect(new Engineer("Michael", 1, "email@email.com", "github")).toBeInstanceOf(Engineer)
        });
        it(`should create an object with a "name", "id", "email", and "github" property with the arguments provided when called with the "new" keyword`, () => {
            const obj = new Engineer("Michael", 1, "email@email.com", "github");

            expect(obj.name).toEqual("Michael");
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual("email@email.com");
            expect(obj.github).toEqual("github");
        });
    });
    describe("getName function", () => {
        it(`returns the "name" of the employee`, () => {
            const obj = new Engineer("Michael", 1, "email@email.com", "github");

            expect(obj.getName()).toEqual("Michael");
        });
    });
    describe("getId function", () => {
        it(`returns the "id" of the employee`, () => {
            const obj = new Engineer("Michael", 1, "email@email.com", "github");

            expect(obj.getId()).toEqual(1);
        });
    });
    describe("getEmail function", () => {
        it(`returns the "email" of the employee`, () => {
            const obj = new Engineer("Michael", 1, "email@email.com", "github");

            expect(obj.getEmail()).toEqual("email@email.com");
        });
    });
    describe("getRole function", () => {
        it(`returns the "role" of the employee`, () => {
            const obj = new Engineer("Michael", 1, "email@email.com", "github");

            expect(obj.getRole()).toEqual("Engineer");
        });
    });
    describe("getGithub function", () => {
        it(`returns the "github" of the employee`, () => {
            const obj = new Engineer("Michael", 1, "email@email.com", "github");

            expect(obj.getGithub()).toEqual("github");
        });
    });
});