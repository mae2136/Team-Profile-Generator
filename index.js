const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Render = require(`./src/render`);

// Role question prompt
const rolePrompt = [
    {
        type: "list",
        message: "Which type of team member do you want to add to your team?",
        choices: [`Manager`, `Engineer`, `Intern`],
        name: "role",
    },
];

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
        message: "What is the engineer's github?",
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

// Array of All objects that need to be output to html file.
const output = [];
// Variable to determine if we are looping the program or not.
let loopAnswer = false;

function init() {
    // Helpful welcome describing purpose of program based on loopAnswer
    if (loopAnswer) {
        console.log("Let's add another person your team!");
    } else {
        console.log("Let's help you create your team!");
    }

    // Prompts a list of roles for team members
    inquirer
        .prompt(rolePrompt)
        .then(answer => {
            // Check role selected by user and ask next set of questions
            const { role } = answer;
            console.log(`Great! Let's fill the ${role}'s info.`);
            if (role === 'Manager') {
                managerInfo();
            } else if (role === 'Engineer') {
                engineerInfo();
            } else {
                internInfo();
            }
        });
}

function managerInfo() {
    inquirer.prompt(managerPrompt).then((answers) => {
        const { name, id, email, officeNumber } = answers;
        let managerObj = new Manager(name, id, email, officeNumber);
        // Pushes created manager object in to output array
        output.push(managerObj);
        askToContinue(answers.askAgain);
    });
};

function engineerInfo() {
    inquirer.prompt(engineerPrompt).then((answers) => {
        const { name, id, email, github } = answers;
        let engineerObj = new Engineer(name, id, email, github);
        // Pushes created engineer object in to output array
        output.push(engineerObj);
        askToContinue(answers.askAgain);
    });
};

function internInfo() {
    inquirer.prompt(internPrompt).then((answers) => {
        const { name, id, email, school } = answers;
        let internObj = new Intern(name, id, email, school);
        // Pushes created intern object in to output array
        output.push(internObj);
        askToContinue(answers.askAgain);
    });
};

function askToContinue(askAgain) {
    if (askAgain) {
        loopAnswer = true;
        init();
    } else {
        console.log(output);
        // Create HTML here.
        let newPage = new Render;
        newPage.renderPage(output);
        return
    }
}

// Runs program
init();