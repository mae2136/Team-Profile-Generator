const fs = require(`fs`);
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// Role question prompt
const rolePrompt = {
    type: "list",
    message: "Which type of team member do you want to add to your team?",
    choices: [`Manager`, `Engineer`, `Intern`],
    type: "role",
};

// Manager question prompt array
const managerPrompt = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the manager's ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Want to add another employee to your team? (just hit enter for YES)?',
        default: true,
    },
];

// Engineer question prompt array
const engineerPrompt = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the engineer's ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the engineer's github page?",
        name: "github",
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Want to add another employee to your team? (just hit enter for YES)?',
        default: true,
    },
];

// Intern question prompt array
const internPrompt = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the intern's ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "email",
    },
    {
        type: "input",
        message: "What school does the intern attend?",
        name: "school",
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Want to add another employee to your team? (just hit enter for YES)?',
        default: true,
    },
];

const output = [];

function init() {
    // Helpful welcome describing purpose of program
    console.log("Let's help you build out your team!");
    // Prompts a list of roles for team members
    inquirer.prompt(rolePrompt).then((answers) => {
        const { role } = answers;
        // Check role selected by user and ask next set of questions
        if (role === 'Manager') {
            answers = managerInfo();
        } else if (role === 'Engineer') {
            answers = engineerInfo();
        } else {
            answers = internInfo();
        }
    });
}

function managerInfo() {
    inquirer.prompt(managerPrompt).then((answers) => {
        output.push(answers);
        if (answers.askAgain) {
            init();
        } else {
            console.log(output);
        }
    });
};

// Runs program
init();