// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    ['title', "What is the project title?: "], 
    ['description', "What is the project description?: "], 
    ['installation', "What is the project's installation instructions?: "], 
    ['usage', "What is the usage information?: "], 
    ['contributors', "Who else contributed to the project?: "], 
    ['test', "Are there any test instructions?: "],
    ['github', "Please enter your GitHub username: "],
    ['email', "Please enter your email address: "],
    ['license', "What license are you using?: "]
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) =>
  err ? console.error(err) : console.log(`README.md created!`)
);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions.map((question, index) => {
    return {
      type: 'input',
      message: question[1],
      name: question[0],
    };
  }))
  .then((answers) => {
    console.log(answers)
    const markdown = generateMarkdown(answers);
    writeToFile(markdown);
    
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
