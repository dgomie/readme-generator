// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    "What is the project title?: ", 
    "What is the project description?: ", 
    "What is the project's installation instructions?: ", 
    "What is the usage information?: ", 
    "Who else contributed to the project?: ", 
    "Are there any test instructions?: ",
    "Please enter your GitHub username: ",
    "Please enter your email address: ",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, (err) =>
  err ? console.error(err) : console.log(`${fileName} created!`)
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
          type: 'input',
          message: questions[0],
          name: 'username',
        },
        {
          type: 'input',
          message: questions[1],
          name: 'password',
        },
        {
          type: 'input',
          message: questions[2],
          name: 'confirm',
        },
      ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        return console.log("Something went wrong")
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
