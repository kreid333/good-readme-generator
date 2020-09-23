// defining inquirer variable
const inquirer = require("inquirer");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description?",
  },
  {
    type: "input",
    name: "installation",
    message: "How would a user go about installing this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How would a user use this project?",
  },
  {
    type: "list",
    choices: ["MIT License", "Apache License 2.0", "GNU General Public License v3.0"],
    name: "license",
    message: "What is your project license?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How would others go about contributing to this project?",
  },
  {
    type: "input",
    name: "test",
    message: "What tests did you write for your application (if applicable)?",
  },
  {
    type: "input",
    name: "questions",
    message: "What is your GitHub username?",
    message: "What is your email address?"
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();

// running inquirer
inquirer
  .prompt(questions[0])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    if (err) {
      return err;
    }
  });
