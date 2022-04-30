// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const readmeDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = readmeDataArgs;
const generateMarkdown = require("./src/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "Title",
      message:
        "What is the team manager's name, employee ID, email address, and office number?",
    },
    {
      type: "input",
      name: "Description",
      message:
        "What is the engineer's name, employee ID, email, and GitHub username",
    },
    {
      type: "input",
      name: "Table of Contents",
      message: "What is the intern's name, employee ID, and school",
    },
  ]);
};
questions().then((answers) => {
  console.log(answers);
  fs.writeFile("./dist/index.html", generateMarkdown({ ...answers }), (err) => {
    if (err) throw err;
    console.log(answers);

    console.log("Index.html complete! Check out readme.md to see the output!");
  });
});

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writetoFile("Index.html", generateMarkdown(data));
    console.log(data);
  });
}
