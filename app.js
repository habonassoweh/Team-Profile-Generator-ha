// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const readmeDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = readmeDataArgs;
const generateMarkdown = require("./src/generateMarkdown");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employeeArray = [];

// TODO: Create an array of questions for user input
const managerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name ?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the employee's Office Number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      employeeArray.push(manager);
      addTeamMembers();
    });
};

const engineerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name ?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's github?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      employeeArray.push(engineer);
      addTeamMembers();
    });
};

const internQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name ?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      employeeArray.push(intern);
      addTeamMembers();
    });
};

const addTeamMembers = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "team",
        message: "What additional team member would you like to add?",
        choices: ["engineer", "intern", "team is complete"],
      },
    ])
    .then((answers) => {
      if (answers.team === "engineer") {
        engineerQuestions();
      } else if (answers.team === "intern") {
        internQuestions();
      } else {
        // call function to write
      }
    });
};

// questions().then((answers) => {
//   console.log(answers);
//   fs.writeFile("./dist/index.html", generateMarkdown({ ...answers }), (err) => {
//     if (err) throw err;
//     console.log(answers);

//     console.log("Index.html complete! Check out readme.md to see the output!");
//   });
// });

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writetoFile("Index.html", generateMarkdown(data));
    console.log(data);
  });
}

managerQuestions();
//

//create function to create team
